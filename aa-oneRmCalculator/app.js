// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';
  
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults(){
  console.log('Calculating...');  // UI Vars
  // input fields
  const weight = document.getElementById('weight-lifted');
  const reps = document.getElementById('reps');
  const bodyweight = document.getElementById('bw');
  
  // output fields
  const strengthWeight = document.getElementById('strength-weight');
  const oneRepMax = document.getElementById('one-rep-max');
  
  // calculations
  const oneRm = parseFloat(weight.value) * 36/(37 - parseFloat(reps.value));
  const strWt = parseFloat(oneRm.value) / parseFloat(bodyweight.value); 

  if(isFinite(oneRm)) {
    console.log('isFinite');
    // strengthWeight.value = oneRepMax / bodyweight;
    // strengthWeight.value = strWt.toFixed(2);
    oneRepMax.value = oneRm.toFixed(1);
    strengthWeight.value = (oneRepMax.value / bodyweight.value).toFixed(1);
    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';
    
   } else {
    showError('Please check your numbers');

}


// Show Error
function showError(error){
  // Hide results
  document.getElementById('results').style.display = 'none';
  
  // Hide loader
  document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}

}
