import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';

import { Product, ICartItem } from 'types/product';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;

      console.error('Login error:', errorCode, errorMessage, email);
    });
}

export async function logout() {
  return signOut(auth).then(() => null);
}

export function onUserStateChange(callback: any) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await checkAdmin(user) : null;
    callback(updatedUser);
  });
}

async function checkAdmin(user: User) {
  return get(ref(database, 'admins')).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);

      return { ...user, isAdmin };
    }

    return user;
  });
}

export async function createProduct(product: any, imageUrl: string) {
  const id = uuid();

  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imageUrl,
    options: product.options.split(','),
  });
}

export async function getProducts(): Promise<Product[]> {
  return get(ref(database, 'products')).then((snapshot) => {
    return snapshot.exists() ? Object.values(snapshot.val()) : [];
  });
}

export async function getProduct(id: string): Promise<Product> {
  return get(ref(database, `products/${id}`)).then((snapshot) => {
    return snapshot.val();
  });
}

export async function getCart(userId: string): Promise<ICartItem[]> {
  return !!userId
    ? get(ref(database, `carts/${userId}`)).then((snapshot) => {
        const items = snapshot.val() || {};

        return Object.values(items);
      })
    : [];
}

export async function addOrUpdateCart(userId: string, cart: ICartItem) {
  return set(ref(database, `carts/${userId}/${cart.id}`), cart);
}

export async function deleteCart(userId: string, cartId: string) {
  return remove(ref(database, `carts/${userId}/${cartId}`));
}
