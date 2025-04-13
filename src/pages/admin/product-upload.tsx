import { useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

import { uploadImage } from 'apis/uploader';

interface Product {
  title: string;
  price: number;
  category: string;
  description: string;
  options: string;
}

const AdminProductUpload = () => {
  const [product, setProduct] = useState<Product>({
    title: '',
    price: 0,
    category: '',
    description: '',
    options: '',
  });
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    console.log(files);
    if (name === 'image' && files) {
      setImage(files[0]);
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (image) {
      uploadImage(image).then((url) => {
        console.log(url);
      });
    }
  };

  return (
    <section className='flex flex-col gap-4 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold'>새로운 제품 등록</h1>
      {image && <img src={URL.createObjectURL(image)} alt='product-image' />}

      <form onSubmit={handleSubmit}>
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
        <Button type='submit'>등록</Button>
      </form>
    </section>
  );
};

export default AdminProductUpload;
