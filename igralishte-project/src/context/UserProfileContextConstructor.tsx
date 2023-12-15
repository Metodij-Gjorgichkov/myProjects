import { useRouter } from "next/router";
import React, { useState } from "react";
import { createContext } from "react";

export interface Register2Type {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  image?: string;
  adress?: string;
  biografy?: string;
  telNumber?: string;
}

interface UserContextType {
  image: string;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  user: {
    email: string;
  };
  handleLogin: (email: string, password: string) => void;
  registerUser: Register2Type[];
  handleAddUser: (newUser: Register2Type) => void;
  registerNewUser: Register2Type;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  selectedUserId: string;
  findNewlyRegistredUser: () => void;
  handleFinalChanges: () => void;
  handleLogOut: () => void;
  handleOnPasswordChange: (event: React.FormEvent<HTMLFormElement>) => void;
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export const UserProfileContext = createContext<UserContextType>({
  image: "",
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => {},
  user: {
    email: "",
  },
  handleLogin: (email: string, password: string) => {},
  registerUser: [],
  handleAddUser: (newUser: Register2Type) => {},
  registerNewUser: {
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    adress: "",
    biografy: "",
    telNumber: "",
  },
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
  handleUserOnSubmit: (event: React.FormEvent<HTMLFormElement>) => {},
  selectedUserId: "",
  findNewlyRegistredUser: () => {},
  handleFinalChanges: () => {},
  handleLogOut: () => {},
  handleOnPasswordChange: (event: React.FormEvent<HTMLFormElement>) => {},
  isModalOpen: false,
  closeModal: () => {},
  openModal: () => {},
});

interface Props {
  children: React.ReactNode;
}

const UserProfileContextConstructor = ({ children }: Props) => {
  const [image, setImage] = useState<string>("../images/nouser.png");
  const [user, setUser] = useState<UserContextType["user"]>({
    email: "",
  });
  const [registerUser, setRegisterUser] = useState<Register2Type[]>([]);
  const [registerNewUser, setRegisteNewUser] = useState<Register2Type>({
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: image,
    adress: "",
    biografy: "",
    telNumber: "",
  });
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  // image setter in register 3 and adding it to the newly created user
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const files = fileInput.files;

    if (files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // @ts-ignore
        setImage(e.target.result);
        console.log(image);
      };

      reader.readAsDataURL(files[0]);
    }
  };

  // handle login in login page
  const handleLogin = (email: string, password: string) => {
    const foundUser = registerUser.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUser({ email: foundUser.email });
      setSelectedUserId(foundUser.email);
    } else {
      alert("Incorrect credentials, if your new create account");
    }
  };

  // logouts the user
  const handleLogOut = () => {
    setUser({ email: "" });
  };

  // re-writes all the Register2Type values
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setRegisteNewUser({
      ...registerNewUser,
      [name]: value,
    });
  };

  // adding the newly created user to the registerUser array
  const handleAddUser = (newUser: Register2Type) => {
    setRegisterUser([...registerUser, newUser]);
  };

  const handleUserOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      registerNewUser.name &&
      registerNewUser.surname &&
      registerNewUser.email &&
      registerNewUser.password &&
      registerNewUser.confirmPassword
    ) {
      if (registerNewUser.password === registerNewUser.confirmPassword) {
        handleAddUser(registerNewUser);
        setSelectedUserId(registerNewUser.email);

        router.push({
          pathname: "/register3",
        });
      } else {
        setIsModalOpen(true);
      }
    }
  };

  // finds the newly createdUser and adds the image, adress, pw and biografy to it
  const findNewlyRegistredUser = () => {
    setRegisterUser(
      registerUser.map((user) => {
        if (user.email === selectedUserId) {
          return {
            ...user,
            image: image,
            adress: registerNewUser.adress,
            password: registerNewUser.password,
            biografy: registerNewUser.biografy,
          };
        }
        return user;
      })
    );
    if (
      registerNewUser.adress &&
      registerNewUser.biografy &&
      registerNewUser.password
    ) {
      router.push({
        pathname: "/myprofile",
      });
    }
  };

  // saves the last changes if there are any and logs in the user
  const handleFinalChanges = () => {
    setRegisterUser(
      registerUser.map((user) => {
        if (user.email === selectedUserId) {
          return {
            ...user,
            id: registerNewUser.id,
            name: registerNewUser.name,
            surname: registerNewUser.surname,
            email: registerNewUser.email,
            password: registerNewUser.password,
            confirmPassword: registerNewUser.confirmPassword,
            image: image,
            adress: registerNewUser.adress,
            biografy: registerNewUser.biografy,
            telNumber: registerNewUser.telNumber,
          };
        }
        return user;
      })
    );
    setUser({ email: registerNewUser.email });
    setSelectedUserId(registerNewUser.email);
    setImage("../images/nouser.png");

    router.push({
      pathname: "/",
    });
  };

  const handleOnPasswordChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRegisterUser(
      registerUser.map((user) => {
        if (user.email === selectedUserId) {
          return {
            ...user,
            password: registerNewUser.password,
            confirmPassword: registerNewUser.confirmPassword,
          };
        }
        return user;
      })
    );
    if (registerNewUser.password === registerNewUser.confirmPassword) {
      router.push({
        pathname: "/myprofile",
      });
    } else {
      alert("both passwords must be the same");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <UserProfileContext.Provider
      value={{
        image,
        handleFileSelect,
        user,
        handleLogin,
        registerUser,
        handleAddUser,
        registerNewUser,
        handleOnChange,
        handleUserOnSubmit,
        selectedUserId,
        findNewlyRegistredUser,
        handleFinalChanges,
        handleLogOut,
        handleOnPasswordChange,
        isModalOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileContextConstructor;
