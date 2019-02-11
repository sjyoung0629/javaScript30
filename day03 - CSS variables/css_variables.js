const inputs = document.querySelectorAll('.controls input');
const reflect_options = document.querySelectorAll('.direct_option');

var handleUpdate = function () {
    // dataset: all the data attributes from that specific element
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

var handleReflect = function (e) {
    document.documentElement.style.setProperty('box-reflect', e.target.getAttribute('name'));
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
reflect_options.forEach(option => option.addEventListener('click', handleReflect));