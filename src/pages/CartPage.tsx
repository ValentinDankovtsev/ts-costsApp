import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase";
import IPageProps from "../interfaces/page.interface";

import { Formik, Form, Field } from "formik";

export interface Item {
  description: string;
  value: number;
}

const CartPage: React.FunctionComponent<IPageProps> = () => {
  const [costs, setCosts] = useState<Item[]>([]);
  const [cost, setCost] = useState<Item>({ description: "", value: 0 });

  const [currentCost, setCurrentCost] = useState(" ");
  const cuurent = auth.currentUser;

  const todosRef = db.collection(`users/${cuurent?.email}/${currentCost}`);

  const getCosts = async () => {
    const data = await todosRef.get();
    const items: Item[] = [];
    data.forEach((doc) => {
      items.push(doc.data() as Item);
    });

    setCosts(items);
  };

  const addCost = async (cost: Item) => {
    if (cost.value !== 0)
      await db.collection(`users/${cuurent?.email}/${currentCost}`).add(cost);
    setCost(cost);
  };

  useEffect(() => {
    addCost;
    getCosts();
  }, [cost]);

  useEffect(() => {
    getCosts();
  }, [currentCost]);

  const sum =
    costs.length !== 0
      ? costs.map((cost) => +cost.value).reduce((a, b) => a + b)
      : [];

  return (
    <div>
      <h1>Главная страница</h1>
      <h2>
        Расходы по текущей категории:{currentCost} всего {sum}
      </h2>

      {costs.map((cost, i) => {
        return (
          <div key={i}>
            <h5 key={cost.description}>Расход: {cost.description}</h5>
            <h5 key={cost.value}>Значение: {cost.value}</h5>
          </div>
        );
      })}
      <Formik
        initialValues={{
          currentCost: "",
        }}
        onSubmit={(values: { currentCost: string }) => {
          setCurrentCost(values.currentCost);
        }}
      >
        <Form>
          <label htmlFor="currentCost">Категория:</label>
          <Field
            id="currentCost"
            name="currentCost"
            required
            placeholder="Категория"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {currentCost !== " " && (
        <Formik
          initialValues={{
            description: "",
            value: 0,
          }}
          onSubmit={(values: Item) => {
            addCost(values);
          }}
        >
          <Form>
            <label htmlFor="description">Расход:</label>
            <Field id="description" name="description" placeholder="Описание" />

            <label htmlFor="value">Значение:</label>
            <Field id="value" name="value" required placeholder="кол-во" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      )}
      <Link to={`/`}>
        <button>Вернуться на домашнюю страницу</button>
      </Link>
    </div>
  );
};
export default CartPage;
