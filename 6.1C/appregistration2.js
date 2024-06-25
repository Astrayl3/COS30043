new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    streetAddress: '',
    suburb: '',
    postcode: '',
    mobileNumber: '',
    showTerms: false,
    errors: {}
  },
  methods: {
    validateFirstName() {
      const regex = /^[A-Za-z]+$/
      if (!this.firstName) {
        this.errors.firstName = "First name is required."
      } else if (!regex.test(this.firstName)) {
        this.errors.firstName = "First name must contain only letters."
      } else {
        delete this.errors.firstName
      }
    },
    validateLastName() {
      const regex = /^[A-Za-z]+$/
      if (!this.lastName) {
        this.errors.lastName = "Last name is required."
      } else if (!regex.test(this.lastName)) {
        this.errors.lastName = "Last name must contain only letters."
      } else {
        delete this.errors.lastName
      }
    },
    validateUserName() {
      if (!this.userName) {
        this.errors.userName = "User name is required."
      } else if (this.userName.length < 3) {
        this.errors.userName = "User name must be at least 3 characters long."
      } else {
        delete this.errors.userName
      }
    },
    validatePassword() {
      const regex = /[$%^&*]/
      if (!this.password) {
        this.errors.password = "Password is required."
      } else if (this.password.length < 8) {
        this.errors.password = "Password must be at least 8 characters long."
      } else if (!regex.test(this.password)) {
        this.errors.password = "Password must contain at least 1 special character ($, %, ^, &, *)."
      } else {
        delete this.errors.password
      }
    },
    validateConfirmPassword() {
      if (!this.confirmPassword) {
        this.errors.confirmPassword = "Confirm password is required."
      } else if (this.confirmPassword !== this.password) {
        this.errors.confirmPassword = "Passwords do not match."
      } else {
        delete this.errors.confirmPassword
      }
    },
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.email) {
        this.errors.email = "Email is required."
      } else if (!regex.test(this.email)) {
        this.errors.email = "Email must be in a valid format."
      } else {
        delete this.errors.email
      }
    },
    validateStreetAddress() {
      if (this.streetAddress.length > 40) {
        this.errors.streetAddress = "Street address must be less than 40 characters."
      } else {
        delete this.errors.streetAddress
      }
    },
    validateSuburb() {
      if (this.suburb.length > 20) {
        this.errors.suburb = "Suburb must be less than 20 characters."
      } else {
        delete this.errors.suburb
      }
    },
    validatePostcode() {
      const regex = /^\d{4}$/
      if (!this.postcode) {
        this.errors.postcode = "Postcode is required."
      } else if (!regex.test(this.postcode)) {
        this.errors.postcode = "Postcode must be exactly 4 numeric digits."
      } else {
        delete this.errors.postcode
      }
    },
    validateMobileNumber() {
      const regex = /^04\d{8}$/
      if (!this.mobileNumber) {
        this.errors.mobileNumber = "Mobile number is required."
      } else if (!regex.test(this.mobileNumber)) {
        this.errors.mobileNumber = "Mobile number must be 10 digits and start with 04."
      } else {
        delete this.errors.mobileNumber
      }
    },
    toggleTerms() {
      this.showTerms = !this.showTerms
    },
    validateForm() {
      this.validateFirstName()
      this.validateLastName()
      this.validateUserName()
      this.validatePassword()
      this.validateConfirmPassword()
      this.validateEmail()
      this.validateStreetAddress()
      this.validateSuburb()
      this.validatePostcode()
      this.validateMobileNumber()
      
      if (Object.keys(this.errors).length === 0) {
        document.getElementById('registrationForm').submit()
      }
    }
  }
})
