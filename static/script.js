// // Get the add misc line button
// const add_misc_line = document.querySelector('#add_misc_line');

// add_misc_line.addEventListener('click', function(e) {
//     // Prevent the default behavior of the button
//     e.preventDefault();
//     createMiscLine();
// });

function addMiscLine() {
    // Get the misc lines container
    const misc_lines = document.querySelector('#misc_lines');

    // Create the misc line label
    const misc_line_label = document.createElement('label');
    misc_line_label.classList.add('form-label', 'fw-bold');
    misc_line_label.innerHTML = 'Misc Amount';
    misc_lines.appendChild(misc_line_label);

    // Create the misc line description
    const misc_line_description = document.createElement('input');
    misc_line_description.classList.add('form-control', 'mb-1');
    misc_line_description.setAttribute('type', 'text');
    misc_line_description.setAttribute('name', 'misc_descriptions');
    misc_line_description.setAttribute('placeholder', 'Enter misc description');
    misc_lines.appendChild(misc_line_description);

    // Create the misc line input
    const misc_line_input = document.createElement('input');
    misc_line_input.classList.add('form-control', 'mb-3');
    misc_line_input.setAttribute('type', 'number');
    misc_line_input.setAttribute('name', 'misc_amounts');
    misc_line_input.setAttribute('value', '0');
    misc_line_input.setAttribute('step', '0.01');
    misc_lines.appendChild(misc_line_input);

}

// // Get the form
// const form = document.querySelector('form');
// // Get the result element
// const result = document.querySelector('#result');


// // Add event listener to the form
// form.addEventListener('submit', function(e) {
//     // Prevent the default behavior of the form
//     e.preventDefault();

//     // Get the values of the inputs
//     const lead_hours = document.querySelector('#lead_hours').value;
//     const lead_rates = document.querySelector('#lead_rates').value;
//     const lead_misc = document.querySelector('#lead_misc').value;
//     const lead_misc_rate = document.querySelector('#lead_misc_rate').value;
//     const test_hours = document.querySelector('#test_hours').value;
//     const test_rates = document.querySelector('#test_rates').value;
//     const test_misc = document.querySelector('#test_misc').value;
//     const test_misc_rate = document.querySelector('#test_misc_rate').value;



//     // Get all of the misc amounts
//     const misc_amounts = document.querySelectorAll('input[name="misc_amounts"]');

//     // Calculate the total misc amount
//     let total_misc_amount = 0;
//     for (let i = 0; i < misc_amounts.length; i++) {
//         total_misc_amount += parseFloat(misc_amounts[i].value);
//     }

//     // Calculate the total cost
//     let total_cost = 0;
//     total_cost += lead_hours * lead_rates;
//     total_cost += lead_misc * lead_misc_rate;
//     total_cost += test_hours * test_rates;
//     total_cost += test_misc * test_misc_rate;
//     total_cost += total_misc_amount;

//     // Display the result
//     result.innerHTML = `Total Cost: $${total_cost.toFixed(2)}`;
// });

function calculate() {
    
    // Get the result element
    const result = document.querySelector('#result');

    // Clear the result element
    result.innerHTML = '';

    // Get the values of the inputs
    const lead_hours = document.querySelector('#lead_hours').value;
    console.log(lead_hours);
    const lead_rates = document.querySelector('#lead_rate').value;
    const lead_misc = document.querySelector('#lead_misc').value;
    const lead_misc_rate = document.querySelector('#lead_misc_rate').value;
    const test_hours = document.querySelector('#test_hours').value;
    const test_rates = document.querySelector('#test_rate').value;
    const test_misc = document.querySelector('#test_misc').value;
    const test_misc_rate = document.querySelector('#test_misc_rate').value;

    // Get all of the misc amounts
    const misc_amounts = document.querySelectorAll('input[name="misc_amounts"]');
    // Calculate the total misc amount
    let total_misc_amount = 0;
    for (let i = 0; i < misc_amounts.length; i++) {
        total_misc_amount += parseFloat(misc_amounts[i].value);
    }

    // Calculate subtotal for lead
    let lead_subtotal = 0;
    lead_subtotal += lead_hours * lead_rates;
    lead_subtotal += lead_misc * lead_misc_rate;
    console.log(lead_subtotal);

    // Calculate subtotal for test
    let test_subtotal = 0;
    test_subtotal += test_hours * test_rates;
    test_subtotal += test_misc * test_misc_rate;
    console.log(test_subtotal);

    // Calculate the total cost
    let total_cost = 0;
    total_cost += lead_hours * lead_rates;
    total_cost += lead_misc * lead_misc_rate;
    total_cost += test_hours * test_rates;
    total_cost += test_misc * test_misc_rate;
    total_cost += total_misc_amount;
    console.log(total_cost);

    // Display the result
    // Create the lead subtotal label
    const lead_subtotal_label = document.createElement('label');
    lead_subtotal_label.classList.add('form-label', 'fw-bold');
    lead_subtotal_label.innerHTML = 'Lead Subtotal';
    result.appendChild(lead_subtotal_label);

    // Create the lead subtotal input
    const lead_subtotal_input = document.createElement('input');
    lead_subtotal_input.classList.add('form-control', 'mb-3');
    lead_subtotal_input.setAttribute('type', 'number');
    lead_subtotal_input.setAttribute('name', 'lead_subtotal');
    lead_subtotal_input.setAttribute('value', lead_subtotal.toFixed(2));
    lead_subtotal_input.setAttribute('readonly', true);
    result.appendChild(lead_subtotal_input);

    // Create the test subtotal label
    const test_subtotal_label = document.createElement('label');
    test_subtotal_label.classList.add('form-label', 'fw-bold');
    test_subtotal_label.innerHTML = 'Test Subtotal';
    result.appendChild(test_subtotal_label);

    // Create the test subtotal input
    const test_subtotal_input = document.createElement('input');
    test_subtotal_input.classList.add('form-control', 'mb-3');
    test_subtotal_input.setAttribute('type', 'number');
    test_subtotal_input.setAttribute('name', 'test_subtotal');
    test_subtotal_input.setAttribute('value', test_subtotal.toFixed(2));
    test_subtotal_input.setAttribute('readonly', true);
    result.appendChild(test_subtotal_input);
    
    // Create the total misc amount label
    const total_misc_amount_label = document.createElement('label');
    total_misc_amount_label.classList.add('form-label', 'fw-bold');
    total_misc_amount_label.innerHTML = 'Total Other Misc Amount';
    result.appendChild(total_misc_amount_label);

    // Create the total misc amount input
    const total_misc_amount_input = document.createElement('input');
    total_misc_amount_input.classList.add('form-control', 'mb-3');
    total_misc_amount_input.setAttribute('type', 'number');
    total_misc_amount_input.setAttribute('name', 'total_misc_amount');
    total_misc_amount_input.setAttribute('value', total_misc_amount.toFixed(2));
    total_misc_amount_input.setAttribute('readonly', true);
    result.appendChild(total_misc_amount_input);
    
    // Create the total cost label
    const total_cost_label = document.createElement('label');
    total_cost_label.classList.add('form-label', 'fw-bold');
    total_cost_label.innerHTML = 'Total Cost';
    result.appendChild(total_cost_label);

    // Create the total cost input
    const total_cost_input = document.createElement('input');
    total_cost_input.classList.add('form-control', 'mb-3');
    total_cost_input.setAttribute('type', 'number');
    total_cost_input.setAttribute('name', 'total_cost');
    total_cost_input.setAttribute('value', total_cost.toFixed(2));
    total_cost_input.setAttribute('readonly', true);
    result.appendChild(total_cost_input);
}



