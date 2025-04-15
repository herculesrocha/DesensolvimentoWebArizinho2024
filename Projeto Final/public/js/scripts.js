// Mostrar e esconder o formulário de adicionar produto
document.getElementById('addProductBtn').addEventListener('click', function() {
    document.getElementById('productForm').style.display = 'block';
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('productForm').style.display = 'none';
});

// Adicionar a lógica de edição
document.querySelectorAll('.editBtn').forEach(function(button) {
    button.addEventListener('click', function() {
        const id = button.getAttribute('data-id');
        const description = prompt('Digite a nova descrição:');
        const value = prompt('Digite o novo valor:');
        if (description && value) {
            fetch(`/edit/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `description=${description}&value=${value}`
            }).then(response => {
                if (response.ok) {
                    location.reload();
                }
            });
        }
    });
});