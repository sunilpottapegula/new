import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wallet.html',
  styleUrl: './wallet.css'
})
export class Wallet {
  rawBalance = 1250000.00;
  selectedCurrency = 'USD';
  displayBalance = '$1,250,000.00';
  activeTab = 'earnings';
  isSpinning = false;
  withdrawAmount: number | null = null;
  withdrawMethod = 'PayPal';

  updateCurrency() {
    let formatted;
    switch(this.selectedCurrency) {
      case 'INR': formatted = '₹' + (this.rawBalance * 83).toLocaleString(); break;
      case 'KWD': formatted = (this.rawBalance * 0.31).toLocaleString() + ' KD'; break;
      case 'KRW': formatted = '₩' + (this.rawBalance * 1300).toLocaleString(); break;
      default: formatted = '$' + this.rawBalance.toLocaleString();
    }
    this.displayBalance = formatted;
  }

  refreshWallet() {
    this.isSpinning = true;
    setTimeout(() => {
      this.isSpinning = false;
      this.updateCurrency();
    }, 800);
  }

  processWithdrawal() {
    if (this.withdrawAmount && this.withdrawAmount >= 50) {
      alert(`Withdrawal Request of ${this.withdrawAmount} via ${this.withdrawMethod} Submitted!`);
    } else {
      alert("Error: Minimum withdrawal is 50.00");
    }
  }
}
