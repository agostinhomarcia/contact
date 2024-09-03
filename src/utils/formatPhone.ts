export function formatPhone(phone: string): string {
    // Remove tudo que não for dígito
    const cleaned = phone.replace(/\D/g, '');
  
    // Aplica a máscara
    const match = RegExp(/^(\d{2})(\d{5})(\d{4})$/).exec(cleaned);
  
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  
    // Retorna o valor original se não for possível formatar
    return phone;
  }
  