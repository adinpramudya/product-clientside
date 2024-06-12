import { onMounted, ref } from "vue";
import router from "@/router";
import axios from "axios";

export default {
  setup() {
    const now = new Date();
    const startDate = ref(new Date(now.getFullYear(), now.getMonth(), 2));
    const endDate = ref(new Date(now.getFullYear(), now.getMonth() + 1, 0));
    const apiUrl = "http://localhost:8080/api/v1/transactions";
    const datas = ref([]);

    onMounted(() => {
      getAllData();
    });

    const getAllData = () => {
      axios
        .get(apiUrl)
        .then((response) => {
          datas.value = response.data.data;
        })
        .catch((error) => {
          console.error("Ada kesalahan dalam mendapatkan data:", error);
        });
    };

    const handleNewData = () => {
      router.push("/new");
    };

    const handleDetail = (id) => {
      router.push({ name: "TransactionDetail", params: { id: id } });
    };

    return {
      handleNewData,
      startDate,
      endDate,
      datas,
      handleDetail,
    };
  },
};
