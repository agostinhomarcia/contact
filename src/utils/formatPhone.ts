export function formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
  
    const match = RegExp(/^(\d{2})(\d{5})(\d{4})$/).exec(cleaned);
  
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phone;
  }
  