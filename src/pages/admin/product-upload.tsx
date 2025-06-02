import { useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

import { uploadImage } from 'apis/uploader';
import useProducts from 'hooks/useProducts';

interface Product {
  title: string;
  price: number;
  category: string;
  description: string;
  options: string;
}

const productInitialState: Product = {
  title: '',
  price: 0,
  category: '',
  description: '',
  options: '',
};

const AdminProductUpload = () => {
  const [product, setProduct] = useState<Product>(productInitialState);
  const [image, setImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const { addProduct } = useProducts();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files) {
      setImage(files[0]);
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsUploading(true);

    if (image) {
      uploadImage(image)
        .then((url) => {
          addProduct.mutate(
            { product, url },
            {
              onSuccess: () => {
                setSuccessMessage('제품이 성공적으로 등록되었습니다.');
                setTimeout(() => {
                  setSuccessMessage('');
                  setProduct(productInitialState);
                }, 3000);
              },
            }
          );
        })
        .finally(() => {
          setIsUploading(false);
        });
    }
  };

  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>

      {successMessage && (
        <p className='my-2 text-green-600'>{successMessage}</p>
      )}

      {image && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(image)}
          alt='product-image'
        />
      )}

      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <input
          type='file'
          name='image'
          accept='image/*'
          required
          onChange={handleChange}
        />
        <Input
          type='text'
          name='title'
          label='제품명'
          onChange={handleChange}
          required
          value={product.title || ''}
        />
        <Input
          type='number'
          name='price'
          label='가격'
          onChange={handleChange}
          required
          value={product.price || ''}
        />
        <Input
          type='text'
          name='category'
          label='카테고리'
          onChange={handleChange}
          required
          value={product.category || ''}
        />
        <Input
          type='text'
          name='description'
          label='설명'
          onChange={handleChange}
          required
          value={product.description || ''}
        />
        <Input
          type='text'
          name='options'
          label='옵션'
          onChange={handleChange}
          required
          value={product.options || ''}
        />
        <Button type='submit' disabled={isUploading}>
          {isUploading ? '업로드 중...' : '등록'}
        </Button>
      </form>
    </section>
  );
};

export default AdminProductUpload;
