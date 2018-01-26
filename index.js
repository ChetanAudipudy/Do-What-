<!DOCTYPE html>
<html lang="en-us">

<head>

  <meta charset="UTF-8">
  <title>Create Activity</title>

  <!-- Firebase Reference -->
  <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <!-- Script -->
  <script src="newActivity.js"></script>

  <!-- Bootstrap CDN-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvlvuBqoM_v-3KtJRu2REtvHxxU2995So&libraries=places&callback=initAutocomplete" async defer></script>

</head>

<body>

  <div class="container">

    <br>

    <!-- Add an Employee -->
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Create Activity</h3>
          </div>
          <div class="panel-body">

            <form>

              <div class="form-group">
                <label for="name">Activity Name</label>
                <input class="form-control" id="name" type="text">
                <span class="error"></span>
              </div>

    <div id="locationField">
      <input id="autocomplete" placeholder="Enter your address"
             onFocus="geolocate()" type="text"></input>
    </div>

    <table id="address">
      <tr>
        <td class="label">Street address</td>
        <td class="slimField"><input class="field" id="street_number"
              disabled="true"></input></td>
        <td class="wideField" colspan="2"><input class="field" id="route"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">City</td>
        <!-- Note: Selection of address components in this example is typical.
             You may need to adjust it for the locations relevant to your app. See
             https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
        -->
        <td class="wideField" colspan="3"><input class="field" id="locality"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">State</td>
        <td class="slimField"><input class="field"
              id="administrative_area_level_1" disabled="true"></input></td>
        <td class="label">Zip code</td>
        <td class="wideField"><input class="field" id="postal_code"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">Country</td>
        <td class="wideField" colspan="3"><input class="field"
              id="country" disabled="true"></input></td>
      </tr>
    </table>
<!--
              <div class="form-group">
                <label for="street">Address (Street)</label>
                <input class="form-control" id="street" type="text">
                <span class="error"></span>
              </div>

               <div class="form-group">
                <label for="city">City</label>
                <input class="form-control" id="city" type="text">
                <span class="error"></span>
              </div>

               <div class="form-group">
                <label for="State">State</label>
                <select class="form-control bfh-states" data-country="US" data-state="CA"></select>
                <span class="error"></span>
              </div> -->

              <label for="type">Activity Type</label>
              <select class="custom-select custom-select-lg mb-3" id="type">
                <option value="">Select</option>
                <option value="Food & Drink">Food & Drink</option>
                <option value="Nightlife">Nightlife</option>
                <option value="Sights & Landmarks">Sights & Landmarks</option>
                <option value="Tours">Tours</option>
                <option value="Outdoor Activities">Outdoor Activities</option>
                <option value="Nature & Parks">Nature & Parks</option>
                <span class="error"></span>
              </select>

              <label for="type">Activity Duration</label>
              <select class="custom-select custom-select-lg mb-3" id="duration">
                <option value="">Select</option>
                <option value="0-1">0 - 1 hours</option>
                <option value="1-2">1 - 2 hours</option>
                <option value="2-3">2 - 3 hours</option>
                <option value="3-4">3 - 4 hours</option>
                <option value="4+">4+ hours</option>
                <span class="error"></span>
              </select>

              <label for="type">Best Time of Day</label>
              <select class="custom-select custom-select-lg mb-3" id="timeOfDay">
                <option value="">Select</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Late Night">Late Night</option>
                <span class="error"></span>
              </select>

              <label for="type">Price Point</label>
              <select class="custom-select custom-select-lg mb-3" id="price">
                <option value="">Select</option>
                <option value="<$20">Less than $20</option>
                <option value="20-50">$20 to $50</option>
                <option value="50-100">$50 to $100</option>
                <option value="100-150">$100 - $150</option>
                <option value="150-200">$150 - $200</option>
                <option value="200+">$200+</option>
                <span class="error"></span>
              </select>

              <div class="form-group">
                <label for="Description">Description</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
                <span class="error"></span>
              </div>

              <label for="image">Upload an Image (optional)</label>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose File</label>
              </div>

              <br><br>
              <div id="error"></div>
              <br>
              <button class="btn btn-primary" id="add-activity" type="submit">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>

  </div>

</body>

</html>