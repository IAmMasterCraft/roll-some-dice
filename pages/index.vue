<template>
  <v-row justify="center" align="center" src="https://picsum.photos/1920/1080?random">
    <v-col cols="12" class="my-6">
      <v-card>
        <v-card-title class="headline d-flex justify-center">
          <div class="">
            <v-img
              contain
              src="https://raw.githubusercontent.com/bedimcode/responsive-christmas-website/main/assets/img/giving1.png"
              max-height="150"
              max-width="150"
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
        <v-card-actions>
          <small>Details provided will be saved sha JSYK</small>
          <v-spacer />
          <v-btn
            color="primary"
          >
            Try Your Luck
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-alert 
      class="my-6"
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
      <v-list-item two-line v-for="(beneficiary, index) in beneficiaries" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ beneficiary.phoneNumber }}</v-list-item-title>
          <v-list-item-subtitle>{{ formatDate(beneficiary.dateGenerated) }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
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
      ],
      beneficiaries: [],
      total: 0,
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
        const tryYourLuck = await this.$axios.$post("/api/giveaway", {
          phoneNumber: this.phoneNumber,
          network: this.network,
          fingerprint: this.fingerprint
        });
        console.log(tryYourLuck);
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