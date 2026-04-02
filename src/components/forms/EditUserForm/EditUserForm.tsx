import styles from "./EditUserForm.module.scss";

import Input from "../../ui-kit/Input/Input";
import Button from "../../ui-kit/Button/Button";

import { editUserSchema } from "../../../validation/editUser.schema";

import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router";
import { useUserStore } from "../../../state/userStore";
import type { IUser } from "../../../api/usersApi";
import React from "react";
import Modal from "../../ui-kit/Modal/Modal";
import SuccessModal from "../../modalsChildren/SuccessModal/SuccessModal";

const EditUserForm = () => {
  const [modalIsOpen, setIsModalIsOpen] = React.useState<boolean>(false);

  const handleModalIsOpen = () => {
    setIsModalIsOpen(!modalIsOpen);
    if (!modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const { users, updateUser } = useUserStore();

  const { id } = useParams();

  const currentUserData = users.find((user) => user.id === Number(id));

  console.log(currentUserData);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Omit<IUser, "id" | "imgUrl">>({
    resolver: zodResolver(editUserSchema),
    mode: "onChange",
    defaultValues: {
      name: currentUserData?.name,
      username: currentUserData?.username,
      email: currentUserData?.email,
      city: currentUserData?.city,
      phone: currentUserData?.phone,
      company: currentUserData?.company,
    },
  });
  const onSubmit: SubmitHandler<Omit<IUser, "id" | "imgUrl">> = (data) => {
    updateUser(`${id}`, data);
    handleModalIsOpen();
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={handleModalIsOpen}>
        <SuccessModal />
      </Modal>
      <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              error={errors.name?.message}
              label="Имя"
              type="text"
              name="username"
              id="username"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <Input
              error={errors.username?.message}
              label="Никнейм"
              type="text"
              name="nickname"
              id="nickname"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              error={errors.email?.message}
              label="Почта"
              type="email"
              name="email"
              id="email"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <Input
              error={errors.city?.message}
              label="Город"
              type="text"
              name="city"
              id="city"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <Input
              error={errors.phone?.message}
              label="Телефон"
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="company"
          render={({ field }) => (
            <Input
              error={errors.company?.message}
              label="Название компании"
              type="text"
              name="company"
              id="company"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Button style={{ marginTop: "8px" }} type="submit">
          Сохранить
        </Button>
      </form>
    </>
  );
};

export default EditUserForm;
