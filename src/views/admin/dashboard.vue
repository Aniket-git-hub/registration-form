<template>
  <section class="section is-clipped">
    <h1 class="title is-4">Admin Dashboard</h1>
    <h2 class="subtitle is-2">Hello Admin</h2>
    <div class="columns">
      <div class="column"><create-notice-form /></div>
      <div class="column">
        <a class="button is-info"
        @click="downloadCSV" 
        :href="metaCSVData.href" 
        :download=" metaCSVData.name ">
          Download CSV
        </a>
      </div>
    </div>
    <div class="table-container">
      <table
        class="
          table table
          is-bordered is-striped is-narrow is-hoverable is-fullwidth
        "
      >
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>Student Name</th>
            <th>Mother's Name</th>
            <th>Class</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Caste</th>
            <th>Religion</th>
            <th>Fee Paid</th>
            <th>Birth Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="admission in admisssions" :key="admission.id">
            <td>{{ admission.id }}</td>
            <td>{{ admission.name }}</td>
            <td>{{ admission.motherName }}</td>
            <td>{{ admission.class }}</td>
            <td>{{ admission.mobile }}</td>
            <td>{{ admission.email }}</td>
            <td>{{ admission.DOB }}</td>
            <td>{{ admission.address }}</td>
            <td>{{ admission.caste }}</td>
            <td>{{ admission.religion }}</td>
            <td>{{ admission.feePaid ? "Paid" : "Not Paid" }}</td>
            <td>
              <figure class="image is-128x128">
                <img src="../../assets/illustrations/404.svg" />
              </figure>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import CreateNoticeForm from "../../components/CreateNoticeForm.vue";
export default {
  components: { CreateNoticeForm },
  name: "adminDashboard",
  data() {
    return {
      admisssions: [
        {
          id: 1,
          name: "Aniket singh",
          motherName: "Aabha suman singh",
          class: "10th",
          caste: "kushwaha",
          religion: "Hindu",
          DOB: "01/02/2022",
          email: "singdharmvir81@gmail.com",
          mobile: 7559419568,
          address: "pandav nagar 2, b-23, chakrapani, bhosari, pune 39",
          feePaid: true,
        },
        {
          id: 2,
          name: "Aniket singh",
          motherName: "Aabha suman singh",
          class: "10th",
          caste: "kushwaha",
          religion: "Hindu",
          DOB: "01/02/2022",
          email: "singdharmvir81@gmail.com",
          mobile: 7559419568,
          address: "pandav nagar 2, b-23, chakrapani, bhosari, pune 39",
          feePaid: false,
        },
        {
          id: 3,
          name: "Aniket singh",
          motherName: "Aabha suman singh",
          class: "10th",
          caste: "kushwaha",
          religion: "Hindu",
          DOB: "01/02/2022",
          email: "singdharmvir81@gmail.com",
          mobile: 7559419568,
          address: "pandav nagar 2, b-23, chakrapani, bhosari, pune 39",
          feePaid: true,
        },
      ],
      metaCSVData:{
        href:null,
        name:null
      }
    };
  },
  methods: {
    downloadCSV() {
      const items = this.admisssions;
      const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
      const header = Object.keys(items[0]);
      const csv = [
        header.join(","), // header row first
        ...items.map((row) =>
          header
            .map((fieldName) => JSON.stringify(row[fieldName], replacer))
            .join(",")
        ),
      ].join("\r\n");
      
      const blob = new Blob([csv], { type: "text/csv" });
      const href = URL.createObjectURL(blob);
      this.metaCSVData.href = href
      this.metaCSVData.name =  new Date().getSeconds().toString() + 
      new Date().getMinutes().toString() + 
      new Date().getHours().toString() + 
      new Date().getDate().toString()+
      new Date().getMonth().toString() + 
      new Date().getFullYear().toString()+'.csv'
      // URL.revokeObjectURL(href);
    },
  },
};
</script>
