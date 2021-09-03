# rn-google-recaptcha-v3
A react native wrapper for google recaptcha v3

## Installation
```
npm install --save rn-google-recaptcha-v3
```

## Usage
```
<GoogleCaptchaV3 {...props} />
```

### Props

* `siteKey` A string representing the siteKey provided in the Google reCaptcha admin console.

* `baseUrl` URL associated with the app (This is the domain url that you registered on Google Admin Console when getting a siteKey)

* `action` A string representing the ReCaptcha action (Refer to the ReCaptcha v3 document)

* `onExecute` A function to handle the response of ReCaptcha. Takes in a parameter that represents the
response token from the ReCaptcha.

### Contribution

Feel like contribution to this repository? The steps are simple:
* Fork the repository
* Make the changes you'd like to see
* Create a PR and wait for it to be approved by two people before merging

#### Thank-you for using `rn-google-recaptcha-v3` 😀 Feel free to also leave any feedback or change requests you may have.