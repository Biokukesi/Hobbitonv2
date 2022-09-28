<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
     

  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <img src="../assets/img/Hobbiton.png"/>
                  <h3 class="font-weight-lighter text-info text-gradient">Enter identification number</h3>
                  
                </div>
                <div class="card-body">
                
                  <FormKit
                    v-model="password"
                    name="Broker id"
                    label="Broker id"
                    validation="required|id"
                    
                  />
                  <button v-on:click="viewPolicies()" type="button" class="btn btn-danger btn-lg btn-block">View Policies</button>
                  <button v-on:click="viewTransactions()" type="button" class="btn btn-info btn-lg btn-block">View Transactions</button>
                  <div>
                  
                </div>

                               
                </div>
               
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </main>

  <div class="py-4 container-fluid">
  <div class="row">
    <div class="col-12">
    
       <table class="table table-bordered table-hover table-responsive-sm">
        <thead>
          <tr>
            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
            >Page Number</th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Page Size</th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >First Page</th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Last Page</th>
            <th
            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Total Records</th>
            <th
            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Next Page</th>
            <th
            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Previous Page</th>
            <th
            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Data</th>
            <th
            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Succeeded</th>
            <th
            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Errors</th>
            <th
            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Message</th>
            <th class="text-secondary opacity-7"></th>
            </tr>
           </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.pageNumber}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.pageSize}}</h6>
                </div>
              </div>
            </td>
           
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.firstPage}}</h6>
                  </div>
                </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.lastPage}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.totalPages}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.totalRecords}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.nextPage}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.previousPage}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.data}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.errors}}</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{results.message}}</h6>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</div>

</div>


  
</template>

<script>

import Navbar from "@/examples/PageLayout/Navbar.vue";
import axios from 'axios';
import bgImg from "@/assets/img/curved-images/curved9.jpg"
const body = document.getElementsByTagName("body")[0];

export default {
  name: "PoliciesAndTransactions",
  components: {
    Navbar,
   
 
  },
  
  data() {
    return {
      bgImg,
      results: [],
      password: ''
    }
  },
  beforeMount() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  methods: {
    async viewPolicies(){
      let result= await axios.get(`https://gar-test.hobbiton.tech/brokers/{${this.password}}/policies`)
      .then(result =>(this.data = result))
      if(result.status==200){
        this.results = result.data
      
    
    
     }
      
    }
    ,
    async viewTransactions(){
      let result= await axios.get(`https://gar-test.hobbiton.tech/brokers/{${this.password}}/transactions`)
      .then(result =>(this.data = result))
     if(result.status==200){
      this.results = result.data
      
    
     }
    }
  },
};
</script>

<style>
  img{
    height: 100px;
  }
</style>
