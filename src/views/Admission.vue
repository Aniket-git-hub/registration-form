<template>
  <section class="section columns">
    <div class="column is-four-fifths container card">
      <form ref="admissionForm" class="card-content" @submit.prevent="submit">
        <h1 class="title is-4">Admission From</h1>
        <div class="columns">
          <div class="column field">
            <label class="label">Student Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Student Name"
                required
                v-model="name"
              />
            </div>
          </div>
          <div class="column field">
            <label class="label">Mother's Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Mother's Name"
                required
                v-model="mother"
              />
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column field">
            <label class="label">Mobile Number</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="Mobile Number"
                required
                v-model="mobile"
              />
            </div>
          </div>

          <div class="column field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="email"
                placeholder="Email input"
                v-model="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>
        </div>

        <div class="columns">
          <div class="column field">
            <label class="label">Class</label>
            <div class="control">
              <div class="select">
                <select required v-model="standard">
                  <option disabled>Select dropdown</option>
                  <option value="1">Standard 1</option>
                  <option value="1">Standard 2</option>
                  <option value="1">Standard 3</option>
                  <option value="1">Standard 4</option>
                  <option value="1">Standard 5</option>
                  <option value="1">Standard 6</option>
                </select>
              </div>
            </div>
          </div>
          <div class="column field">
            <label class="label">Date Of Birth</label>
            <div class="control">
              <input
                class="input"
                type="date"
                placeholder="Mobile Number"
                v-model="DOB"
              />
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Current Address</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Current Address"
              v-model="currentAddress"
            ></textarea>
          </div>
        </div>

        <div class="columns">
          <div class="column field">
            <label class="label">Religion</label>
            <div class="control">
              <div class="select">
                <select required v-model="religion">
                  <option disabled>Select dropdown</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="jain">Jain</option>
                  <option value="christain">Christain</option>
                  <option value="buddist">Buddist</option>
                </select>
              </div>
            </div>
          </div>

          <div class="column field">
            <label class="label">Caste</label>
            <div class="control">
              <div class="select">
                <select required v-model="caste">
                  <option disabled>Select dropdown</option>
                  <option value="open">Open</option>
                  <option value="obc">OBC</option>
                  <option value="sc-st">SC/ST</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
        <div class=" column field">
          <label for="" class="label">Birth Certificate</label>
          <div class="control">
            <div class="file has-name">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="birth-certificate"
                  @change="fileOnchange"
                  required
                  accept="image/*"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> Choose a file… </span>
                </span>
                <span class="file-name">
                  {{ birthCertificate.name }}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="column notification is-info">
        <figure class="image is-16by9">
          <img ref="preview" alt="preview" />
        </figure>
        </div>
    </div>
        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Admission",
  data() {
    return {
      name: "",
      mother: "",
      mobile: "",
      email: "",
      DOB: "",
      currentAddress: "",
      caste: "Select dropdown",
      standard: "Select dropdown",
      religion: "Select dropdown",
      birthCertificate: "",
    };
  },
  methods: {
    submit() {
      console.log(
        this.name,
        this.mother,
        this.mobile,
        this.email,
        this.DOB,
        this.currentAddress,
        this.caste,
        this.standard,
        this.religion,
        this.birthCertificate
      );
    },
    fileOnchange(e) {
      const file = e.target.files[0];

      if (file) {
        if (file.size > 60000) {
          alert("file size is exceeding the limits You idiot");
          return;
        }
        if (file.type == "image/png" || file.type == "image/jpeg") {
          this.birthCertificate = file;

          let reader = new FileReader()
          const imgPreview = this.$refs.preview;
          reader.onload = function(){
             imgPreview.src = reader.result
          }
          reader.readAsDataURL(file)
        }
      }
    },
  },
};
</script>
