<template>
  <div class="animate__animated animate__fadeInDown animate__slow">
    <v-row justify="center" align="center">
      <v-col col="6">
        <img
          class="position-1 animate__animated animate__swing animate__slower animate__infinite"
          contain
          src="/images/footer2.png"
          max-height="100"
          max-width="100"
        />
      </v-col>
      <v-col col="6">
        <img
          class="position-2 animate__animated animate__swing animate__slower animate__infinite"
          absolute
          contain
          max-height="100"
          max-width="100"
          src="/images/footer1.png"
        />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-progress-circular
        :size="250"
        :width="10"
        indeterminate
        color="cyan"
        style="margin: 1rem;"
        v-if="isProgress"
      >
      </v-progress-circular>
      <v-col cols="12" class="">
        <v-card v-if="!isProgress && !isNotify">
          <v-card-title class="headline d-flex justify-center">
            <div class="">
              <v-img
                contain
                class="animate__animated animate__pulse animate__slow animate__infinite"
                src="/images/giving1.png"
                max-height="200"
                max-width="200"
              />
            </div>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                    class="animate__animated animate__backInLeft animate__slow"
                  >
                    <v-text-field
                      v-model="phoneNumber"
                      :rules="phoneNumberRules"
                      label="Phone Number"
                      type="number"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                    class="animate__animated animate__backInLeft animate__slow"
                  >
                    <v-select
                      v-model="network"
                      :items="items"
                      :rules="networkRules"
                      label="Network Provider"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions class="px-6">
            <small class="animate__animated animate__backInLeft animate__slow">Details provided will be saved sha JSYK</small>
            <v-spacer />
            <v-btn
              class="animate__animated animate__backInLeft animate__slow"
              color="cyan"
              @click="Submit"
            >
              Try Your Luck
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-alert 
          class="my-6 animate__animated animate__backInLeft animate__slow"
          v-model="isNotify"
          dismissible 
          :color="(notification.type) ? 'cyan' : 'yellow'"
          border="left"
          elevation="2"
          icon="mdi-fire"
          v-if="isNotify"
          colored-border>
          {{ notification.message }}
        </v-alert>
        <v-alert 
          v-model="isBeneficiary"
          class="mt-15 animate__animated animate__backInLeft animate__slow"
          dismissible 
          color="cyan"
          border="left"
          elevation="2"
          icon="mdi-information-outline"
          colored-border>
            {{ total }} 
            Beneficiar<span v-if="total < 2">y</span><span v-else>ies</span>
            so far...
        </v-alert>
        <div v-if="isBeneficiary">
          <v-list-item two-line v-for="(beneficiary, index) in beneficiaries" :key="index">
            <v-list-item-content class="animate__animated animate__backInLeft animate__slow">
              <v-list-item-title>{{ beneficiary.phoneNumber }}</v-list-item-title>
              <v-list-item-subtitle v-if="beneficiary.dateGenerated">{{ formatDate(beneficiary.dateGenerated) }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      phoneNumber: '',
      network: '',
      fingerprint: '',
      phoneNumberRules: [
        v => !!v || 'Phone Number is required',
        v => v.length === 11 || 'Phone number must be 11 digits',
      ],
      networkRules: [
        v => !!v || 'Network Provider is required',
      ],
      items: [
        "mtn",
        "glo",
        "airtel",
        "9mobile",
      ],
      beneficiaries: [],
      total: 0,
      progress: 60,
      isProgress: false,
      isNotify: false,
      isBeneficiary: true,
      notification: {
        type: false,
        message: "Maybe something went wrong, I don't even know...",
      },
      isVisible: 'visible',
    }),
    methods: {
      GetFP(){
        FingerprintJS.load().then(fp => fp.get())
          .then(result => this.fingerprint = result.visitorId);
      }, // end of GetFP
      async Submit () {
        if (
          this.phoneNumber.length < 11 ||
          this.network.length < 3 ||
          this.fingerprint < 5
        ) {
          alert("Cannot Process Request cos something is fishy!");
          return;
        }
        
        try {
          this.isProgress = true;
          const tryYourLuck = await this.$axios.$post("/api/giveaway", {
            phoneNumber: this.phoneNumber,
            network: this.network,
            fingerprint: this.fingerprint
          });
          this.GetBeneficiary();
          this.notification = {
            type: tryYourLuck.success,
            message: tryYourLuck.message
          };
          this.isProgress = false;
          this.isNotify = true;
        } catch (error) {
          // console.log(error.response);
          this.isProgress = false;
        }
      }, //end of Submit
      async GetBeneficiary () {
        const allBeneficiaries = await this.$axios.$get("/api/giveaway");
        this.beneficiaries = allBeneficiaries.beneficiary;
        this.total = allBeneficiaries.total;
      }, //end of GetBeneficiary
      formatDate(str) {
        const output = new Date(str);
        const splitted = output.toString().split(" ");
        // return `${splitted[0]} ${splitted[1]} ${splitted[2]}, ${splitted[3]}`;
        return `${splitted[1]} ${splitted[2]}, ${splitted[3]}`;
      }, //end of formatDate
    },
    mounted () {
      this.GetFP();
      this.GetBeneficiary();
    }
  }
</script>

<style scoped>
 .position-1 {
   position: absolute;
   top: 0;
   z-index: 1;
   margin-top: -0.8rem;
   width: fit-content;
   max-width: 4rem;
 }

 .position-2 {
   position: absolute;
   top: 0;
   right: 0;
   z-index: 1;
   margin-top: -0.8rem;
   width: fit-content;
   max-width: 4rem;
 }
</style>