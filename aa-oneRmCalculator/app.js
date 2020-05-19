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

}
}
