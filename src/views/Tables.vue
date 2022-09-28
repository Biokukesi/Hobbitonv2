<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <FormKit
        name="name"
        label="Company name"
        validation="required|name"
        v-model= "name"
        placeholder="Hobbiton Technologies"
      />

      <FormKit
      name="companyEmail"
      label="Company email address"
      validation="required|email"
      v-model="companyEmail"
      placeholder="example@gmail.com"
    />

    <FormKit
    name="companyPhone"
    label="Company phone number"
    validation="required|phone"
    v-model="companyPhone"
    placeholder="+260962029134"
  />

     <FormKit
      name="companyAddress"
      label="Company address"
      validation="required|address"
      v-model="companyAddress"
     placeholder="Jambo drive, riverside, Kitwe, Copperbelt, Zambia"
    />

    <FormKit
        name="registrationNumber"
        label="Registration number"
        validation="required|reg_number"
        v-model="registrationNumber"
        
      />
      
     <FormKit
     name="tpin"
     label="Tax payer identification number"
     validation="required|tpin"
     v-model="tpin"
    placeholder=""
    />
    <FormKit
    name="logoUrl"
    label="logo link"
    validation="required|logoUrl"
    v-model="logUrl"
   placeholder="https://www.google.com/search?q=url+for+spotify+lofo&tbm=isch&ved=2ahUKEwiOvfTXvLX6AhXSGVkFHefDDHAQ2-cCegQIABAA&oq=url+for+spotify+lofo&gs_lcp=CgNpbWcQAzoFCAAQgAQ6BggAEB4QBToECAAQGDoGCAAQChAYULQNWPMwYKwzaABwAHgAgAHNA4gBwTOSAQgyLTEuMTUuM5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=uS8zY878MdKz5NoP54ezgAc&bih=656&biw=1536&rlz=1C1CHZN_enZM1011ZM1011#imgrc=MxBiu1YS9Wnz0M"
   />
   <FormKit
    name="broker_id"
    label="Broker id"
    validation="required|id"
    v-model="broker_id"
   />
   <button v-on:click="addInsuranceCompany()" type="button" class="btn btn-danger btn-lg btn-block">Create company</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      results: [],
      name: '',
      companyEmail: '',
      companyPhone: '',
      address: '',
      reg_number: '',
      password: '',
      logo_url: '',
      broker_id: ''

    }
   
  },
  methods: {
    async addInsuranceCompany(){
      let result = await axios.post(`https://gar-test.hobbiton.tech/brokers/{${this.broker_id}}/insurance-companies`,
      {
      name: this.name,
      companyEmail: this.companyEmail,
      companyPhone: this.companyPhone,
      compayAddress: this.companyAddress,
      registrationNumber: this.registrationNumber,
      tpin: this.tpin,
      logoUrl: this.logo_url
    })
      if(result.status == 200){
        (this.$router.push('/Profile'))
      }
     
    
    
      
     
     
    }
  
    

},


}



  
</script>
