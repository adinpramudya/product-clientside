<template>
  <div class="p-5">
    <h1 class="font-bold">Data Transaction</h1>
    <div class="flex justify-end">
      <input
        type="date"
        placeholder="Type here"
        v-model="startDateInput"
        class="input input-bordered input-primary w-full max-w-xs"
      />
      <input
        type="date"
        placeholder="Type here"
        v-model="endDateInput"
        class="input input-bordered input-primary w-full max-w-xs ml-6"
      />
    </div>
    <button class="btn btn-primary my-4" @click="handleNewData">
      New Data
    </button>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>ID</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Transaction Date</th>
            <th>Create By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(item, index) in datas" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.productID }}</td>
            <td>{{ item.productName }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.customerName }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.transactionDate }}</td>
            <td>{{ item.createBy }}</td>
            <td>{{ item.createOn }}</td>
            <th>
              <button
                class="btn btn-ghost btn-xs"
                @click="handleDetail(item.id)"
              >
                details
              </button>
            </th>
          </tr>
        </tbody>
        <!-- foot -->
      </table>
    </div>
  </div>
</template>
<script src="./transaction-script"></script>
