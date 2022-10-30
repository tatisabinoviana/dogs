import React from 'react';
import Input from '../Forms/Input';
import styles from './UserPhotoPost.module.css';

const UserPhotoPost = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleImgChange() {}
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="text" name="peso" />
        <Input label="Idade" type="text" name="idade" />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
      </form>
    </section>
  );
};

export default UserPhotoPost;
