import { createRouter, createWebHistory } from "vue-router";
import Transaction from "@/views/Transaction/transaction.vue";
import FormInput from "@/views/Transaction/FormInput/form-input.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Transaction",
      component: Transaction,
    },
    {
      path: "/new",
      name: "TransactionNew",
      component: FormInput,
    },
    {
      path: "/detail/:id",
      name: "TransactionDetail",
      component: FormInput,
    },
  ],
});

export default router;
