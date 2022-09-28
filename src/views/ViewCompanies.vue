<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-6">Registered companies</h1>
      <p>Enter your broker-id below and click submit</p>
      <FormKit
        v-model="password"
        name="Broker id"
        label="Broker id"
        validation="required|id"
    />
    <button v-on:click="viewAll()" type="button" class="btn btn-danger btn-lg btn-block">Submit</button>
                  
   
    </div>
  </div>
    <table class="table table-bordered table-hover table-responsive-sm">
      <thead class=" align-items-center mb-5">
      <tr>
      <th
              class="text-uppercase  text-dark  text-xxs font-weight-bolder opacity-7 ps-2"
            >Broker id</th>
            <th
              class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Created At</th>
            <th
              class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Updated At</th>
            <th
              class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Name</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Company Email</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Company Phone</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Company Phone</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Company Address</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Registration Number</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >TPIN</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Logo Url</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Status</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Account</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >isActive</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >Clients</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >rUserName</th>
            <th
            class="text-center text-uppercase text-dark text-xxs font-weight-bolder opacity-7"
            >rPassword</th>
          
            </tr>
           </thead> 
           <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.id}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.createdAt}}</h6>
                  </div>
                </div>
              </td>
             
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{results.updatedAt}}</h6>
                    </div>
                  </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.name}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.companyEmail}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.companyPhone}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.companyAddress}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.registrationNumber}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.tpin}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.logoUrl}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.status}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.account}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.isActive}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.isActive}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.clients}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.rUserName}}</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{results.rPassword}}</h6>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
  
       


    </table>
</template>

<script>
import axios from 'axios'
export default {
  name: "ViewCompanies",
   data(){
    return {
      results: [],
      password: '',
    }

  },

  methods: {
    async viewAll(){
      let result= await axios.get(`https://gar-test.hobbiton.tech/brokers/{${this.password}}/insurance-companiesa`)
      .then(result =>(this.data = result))
      if(result.status==200){
        this.results = result.data
        console.log('Hello world');
    
     }
     else if (result.status !==200){
      console.log('Nothing')
     }
      
    }

    

    

  }
 
}
</script>
