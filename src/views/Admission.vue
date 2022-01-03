<template>
  <section class="section">
    <div class="container card">
      <form class="card-content">
        <h1 class="title is-4 ">Admission From</h1>
        <div class="columns">
          <div class="column field">
            <label class="label">Student Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Student Name" />
            </div>
          </div>
          <div class="column field">
            <label class="label">Mother's Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Mother's Name" />
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column field">
            <label class="label">Mobile Number</label>
            <div class="control">
              <input class="input" type="number" placeholder="Mobile Number" />
            </div>
          </div>

          <div class="column field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="email"
                placeholder="Email input"
                value="hello@"
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

        <div class="field">
          <label class="label">Date Of Birth</label>
          <div class="control">
            <input class="input" type="date" placeholder="Mobile Number" />
          </div>
        </div>

        <div class="field">
          <label class="label">Current Address</label>
          <div class="control">
            <textarea class="textarea" placeholder="Current Address"></textarea>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column field">
            <label class="label">Religion</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
          <div class="column field">
            <label class="label">Caste</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label for="" class="label">Birth Certificate</label>
          <div class="control">
            <div class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> Choose a file… </span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
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
  setup() {
    return {};
  },
};
</script>
