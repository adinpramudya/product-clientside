import { onMounted, ref, computed, watch } from "vue";
import router from "@/router";
import axios from "axios";

export default {
  setup() {
    const now = new Date();
    const startDate = ref(new Date(now.getFullYear(), now.getMonth(), 2));
    const endDate = ref(new Date(now.getFullYear(), now.getMonth() + 1, 0));

    const datas = ref([]);
    const startDateInput = ref(startDate.value.toISOString().slice(0, 10));
    const endDateInput = ref(endDate.value.toISOString().slice(0, 10));
    onMounted(() => {
      getAllData(startDateInput.value, endDateInput.value);
    });

    const getAllData = (startDateInput, endDateInput) => {
      const apiUrl = `http://localhost:8080/api/v1/transactions?startDate=${startDateInput}&endDate=${endDateInput}`;
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

    const formattedStartDate = computed(() => {
      if (startDate.value) {
        return startDate.value.toISOString().slice(0, 10);
      }
      return "";
    });

    const formattedEndDate = computed(() => {
      if (endDate.value) {
        return endDate.value.toISOString().slice(0, 10);
      }
      return "";
    });

    watch(startDateInput.value, (newValue, oldValue) => {
      getAllData(newValue, endDateInput);
    });

    watch(endDateInput.value, (newValue, oldValue) => {
      getAllData(startDateInput, newValue);
    });

    return {
      handleNewData,
      startDateInput,
      endDateInput,
      datas,
      handleDetail,
      formattedStartDate,
      formattedEndDate,
    };
  },
};
