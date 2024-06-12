<template>
  <div class="p-5">
    <h1 class="font-bold mb-6">NEW DATA TRANSACTION</h1>
    <button
      class="btn btn-primary my-4 flex justify-end"
      @click="handleEdit"
      v-if="!isEdit"
    >
      Edit
    </button>
    <table style="width: 100%">
      <tr class="w-100">
        <td class="mr-10">Product ID</td>
        <td>
          <input
            :disabled="!isEdit"
            type="number"
            placeholder="Type here"
            v-model="transaction.productID"
            class="input w-full"
          />
        </td>
      </tr>

      <tr>
        <td>Product Name</td>
        <td>
          <input
            :disabled="!isEdit"
            type="text"
            placeholder="Type here"
            class="input w-full"
            v-model="transaction.productName"
          />
        </td>
      </tr>

      <tr>
        <td>Amount</td>
        <td>
          <input
            :disabled="!isEdit"
            type="number"
            placeholder="Type here"
            class="input w-full"
            v-model="transaction.amount"
          />
        </td>
      </tr>
      <tr>
        <td>Customer Name</td>
        <td>
          <input
            :disabled="!isEdit"
            type="text"
            placeholder="Type here"
            class="input w-full"
            v-model="transaction.customerName"
          />
        </td>
      </tr>
      <tr>
        <td>Status</td>
        <td>
          <select class="select w-full max-w-xs" v-model="transaction.status">
            <option disabled value="">Select</option>
            <option :value="0">SUCCESS</option>
            <option :value="1">FAILED</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Transaction Date</td>
        <td>
          <input
            :disabled="!isEdit"
            type="date"
            placeholder="Type here"
            class="input w-full"
            v-model="transaction.transactionDate"
          />
        </td>
      </tr>
      <tr>
        <td>Create By</td>
        <td>
          <input
            :disabled="!isEdit"
            type="text"
            placeholder="Type here"
            class="input w-full"
            v-model="transaction.createBy"
          />
        </td>
      </tr>
    </table>
    <button
      class="btn btn-primary my-4 flex justify-end"
      @click="handleNewData"
      v-if="!transaction.id || isEdit"
    >
      Simpan
    </button>
  </div>
</template>

<script src="./form-input-script.js"></script>
