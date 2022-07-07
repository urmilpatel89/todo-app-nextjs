import React, { useState } from "react";

import styles from "../styles/Home.module.css";
import Head from "./components/Head";
//import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoLists from "./components/ToDoLists";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

const Home = () => {
  const [inputList, setInputList] = useState("apple");
  //const [Items, setItems] = useState([]);
  const [Items, setItems] = useState<string[]>([]);

  const addItemEvents = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    //console.log(event.target.value);
    //console.log(event.target);
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleItems = (id: number) => {
    //console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className={styles.container}>
        <Head />
        <main className={styles.main}>
          <Header />

          <div className={styles.grid}>
            <section className="container">
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    placeholder="Add a Item"
                    value={inputList}
                    onChange={addItemEvents}
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="col-3">
                  <button className="btn btn-primary" onClick={listOfItems}>
                    Create
                  </button>
                </div>
              </div>
              <hr />
              <div className="row rounded bg-white">
                <div className=" col-12">
                  <ul className=" list-group" id="list">
                    {Items.map((itemval, index) => {
                      return (
                        <>
                          <ToDoLists
                            key={itemval}
                            id={index}
                            text={itemval}
                            onSelect={deleItems}
                          />
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
