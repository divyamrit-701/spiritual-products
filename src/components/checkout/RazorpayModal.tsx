import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { formatCurrency } from '../../utils/formatters';
import { ShieldCheck, Lock, Smartphone, CreditCard, Building2, Banknote, CheckCircle2, QrCode, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import confetti from 'canvas-confetti';

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  onPaymentSuccess: (paymentId: string, paymentMethod: string) => void;
}

type PaymentTab = 'upi' | 'cards' | 'netbanking' | 'cod';

export const RazorpayModal: React.FC<RazorpayModalProps> = ({
  isOpen,
  onClose,
  amount,
  customerName,
  customerEmail,
  customerPhone,
  onPaymentSuccess
}) => {
  const [activeTab, setActiveTab] = useState<PaymentTab>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form states
  const [upiId, setUpiId] = useState('');
  const [selectedUpiApp, setSelectedUpiApp] = useState<'gpay' | 'phonepe' | 'paytm' | 'qr'>('gpay');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState(customerName || '');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [codOtp, setCodOtp] = useState('');
  const [codOtpSent, setCodOtpSent] = useState(false);

  if (!isOpen) return null;

  const handleSimulatePayment = (methodName: string) => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const fakePaymentId = `pay_${Date.now().toString(36)}${Math.floor(Math.random() * 1000)}`;

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log('Confetti not available', e);
      }

      onPaymentSuccess(fakePaymentId, methodName);
    }, 1800);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
      <div className="-m-6 bg-white overflow-hidden rounded-2xl">
        
        {/* Razorpay Brand Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-base">
              R
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-wide">Razorpay Trusted</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded font-mono font-medium">
                  256-BIT SSL
                </span>
              </div>
              <div className="text-xs text-slate-300">
                Divyamrit Sacred Store Checkout
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[11px] text-slate-400 block font-mono">Amount to Pay</span>
            <span className="text-lg font-bold text-spiritual-gold-300 font-mono">
              {formatCurrency(amount)}
            </span>
          </div>
        </div>

        {/* Customer Contact Banner */}
        <div className="bg-slate-50 px-5 py-2.5 border-b border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <span className="truncate max-w-[200px]">{customerName || 'Devotee'} ({customerPhone || '+91-XXXXX-XXXXX'})</span>
          <span className="text-slate-500 truncate">{customerEmail || 'orders@divyamrit.com'}</span>
        </div>

        {/* Payment Methods Tabs & Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[300px]">
          
          {/* Left Tabs */}
          <div className="sm:col-span-4 bg-slate-100/70 border-r border-slate-200 p-2 sm:p-3 space-y-1">
            <button
              type="button"
              onClick={() => setActiveTab('upi')}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                activeTab === 'upi'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                  : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <Smartphone className="w-4 h-4 text-blue-600 shrink-0" />
              <span>UPI / QR Code</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('cards')}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                activeTab === 'cards'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                  : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <CreditCard className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Cards (Credit/Debit)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('netbanking')}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                activeTab === 'netbanking'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                  : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>NetBanking (50+ Banks)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('cod')}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                activeTab === 'cod'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                  : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <Banknote className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Cash on Delivery (COD)</span>
            </button>
          </div>

          {/* Right Tab Content */}
          <div className="sm:col-span-8 p-5 flex flex-col justify-between">
            
            {/* UPI Tab */}
            {activeTab === 'upi' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Instant UPI Payment
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    Zero Extra Fees
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedUpiApp('gpay')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-semibold text-left transition-all ${
                      selectedUpiApp === 'gpay'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">G</span>
                    <span>Google Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedUpiApp('phonepe')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-semibold text-left transition-all ${
                      selectedUpiApp === 'phonepe'
                        ? 'border-purple-600 bg-purple-50/50 text-purple-900 ring-1 ring-purple-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-purple-700 text-white text-[10px] font-bold flex items-center justify-center">Pe</span>
                    <span>PhonePe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedUpiApp('paytm')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-semibold text-left transition-all ${
                      selectedUpiApp === 'paytm'
                        ? 'border-cyan-600 bg-cyan-50/50 text-cyan-900 ring-1 ring-cyan-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-[10px] font-bold flex items-center justify-center">P</span>
                    <span>Paytm UPI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedUpiApp('qr')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-semibold text-left transition-all ${
                      selectedUpiApp === 'qr'
                        ? 'border-amber-600 bg-amber-50/50 text-amber-900 ring-1 ring-amber-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-amber-600" />
                    <span>Scan QR Code</span>
                  </button>
                </div>

                {selectedUpiApp === 'qr' ? (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-2">
                    <div className="w-24 h-24 mx-auto bg-white p-1 rounded-lg border border-slate-300 flex items-center justify-center">
                      <QrCode className="w-20 h-20 text-slate-900" />
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Scan with any UPI app (GPay, PhonePe, Paytm, BHIM)
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Or Enter UPI ID / VPA
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. yourname@okhdfcbank"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                    />
                  </div>
                )}

                <Button
                  onClick={() => handleSimulatePayment(`UPI (${selectedUpiApp.toUpperCase()})`)}
                  variant="gold"
                  size="md"
                  fullWidth
                  isLoading={isProcessing}
                  leftIcon={<Lock className="w-4 h-4" />}
                >
                  Pay {formatCurrency(amount)} via UPI
                </Button>
              </div>
            )}

            {/* Cards Tab */}
            {activeTab === 'cards' && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Credit / Debit Card
                </span>

                <div className="space-y-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Card Number
                    </label>
                    <input 
                      type="text"
                      maxLength={19}
                      placeholder="4532 •••• •••• 8921"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Expiry (MM/YY)
                      </label>
                      <input 
                        type="text"
                        maxLength={5}
                        placeholder="08/29"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        CVV / CVC
                      </label>
                      <input 
                        type="password"
                        maxLength={4}
                        placeholder="•••"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Cardholder Name
                    </label>
                    <input 
                      type="text"
                      placeholder="Name on card"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <Button
                  onClick={() => handleSimulatePayment('Credit/Debit Card')}
                  variant="gold"
                  size="md"
                  fullWidth
                  isLoading={isProcessing}
                  leftIcon={<Lock className="w-4 h-4" />}
                >
                  Pay {formatCurrency(amount)}
                </Button>
              </div>
            )}

            {/* NetBanking Tab */}
            {activeTab === 'netbanking' && (
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Select Your Indian Bank
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {['HDFC Bank', 'State Bank of India', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra', 'Punjab National'].map((bank) => (
                    <button
                      key={bank}
                      type="button"
                      onClick={() => setSelectedBank(bank)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                        selectedBank === bank
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500'
                          : 'border-slate-200 text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      {bank}
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() => handleSimulatePayment(`NetBanking (${selectedBank})`)}
                  variant="gold"
                  size="md"
                  fullWidth
                  isLoading={isProcessing}
                  leftIcon={<Building2 className="w-4 h-4" />}
                >
                  Proceed with {selectedBank}
                </Button>
              </div>
            )}

            {/* COD Tab */}
            {activeTab === 'cod' && (
              <div className="space-y-3.5">
                <div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Cash on Delivery with OTP Confirmation
                  </span>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Pay in cash or via UPI to our delivery executive upon arrival at your doorstep.
                  </p>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
                  <div className="text-xs text-amber-900 font-medium">
                    To prevent fake orders and protect rural artisan inventory, an SMS OTP is sent to <strong>{customerPhone || '+91 98200 12345'}</strong>.
                  </div>

                  {!codOtpSent ? (
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => setCodOtpSent(true)}
                    >
                      Send 4-Digit Verification OTP
                    </Button>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <input 
                          type="text"
                          maxLength={4}
                          placeholder="Enter 4-digit OTP (Try 1234)"
                          value={codOtp}
                          onChange={(e) => setCodOtp(e.target.value)}
                          className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white font-mono"
                        />
                        <span className="text-[11px] text-emerald-700 font-semibold">
                          ✓ OTP Sent
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  onClick={() => handleSimulatePayment('Cash on Delivery (COD)')}
                  variant="primary"
                  size="md"
                  fullWidth
                  isLoading={isProcessing}
                  leftIcon={<CheckCircle2 className="w-4 h-4" />}
                >
                  Confirm Cash on Delivery Order
                </Button>
              </div>
            )}

            {/* Security Guarantee notice */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>PCI-DSS Level 1 Compliant • RBI Authorized Payment Gateway</span>
            </div>

          </div>

        </div>

      </div>
    </Modal>
  );
};
