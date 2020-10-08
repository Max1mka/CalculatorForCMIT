if (typeof window !== "undefined") {
   Calculator = {
      _arg1: '',
      _arg2: '',
      _operation: '',
      _$arg1: document.getElementById('arg1'),
      _$arg2: document.getElementById('arg2'),

      _draw: function() {
         this._$arg1.innerText = this._arg1;
         this._$arg2.innerText = `${this._arg2} ${this._operation}`;
      },
      _isValid: function(number) {
         return !isNaN(number);
      },
      _switchArg: function() {
         this._arg2 = this._arg1;
         this._arg1 = '';
      },
      addNumber: function(element) {
         this._arg1 += element.innerText;
         this._draw()
      },
      revert: function() {
         this._arg1 *= -1;
         this._draw();
      },
      operator: function(element) {
         if (!this._operation) {
            this._switchArg();
         }
         this._operation = element.innerText;
         this._draw();
      },
      split: function() {
         if (this._arg1 && this._arg1.indexOf('.') === -1) {
            this._arg1 += '.';
            this._draw();
         }
      },
      result: function() {
         const arg1 = parseFloat(this._arg1);
         const arg2 = parseFloat(this._arg2);
         if (!this._isValid(arg1) || !this._isValid(arg2)) {
            return
         }

         let result;
         switch (this._operation) {
            case "+":
               result = arg2 + arg1;
               break;
            case "-":
               result = arg2 - arg1;
               break;
            case "*":
               result = arg2 * arg1;
               break;
            case "/":
               result = arg1 === 0 ?
                  'На ноль делить нельзя!!!' :
                  arg2 / arg1;
               break;
            default:
               break;
         }
         this._arg1 = result.toString(10);
         this._arg2 = '';
         this._operation = '';
         this._draw();
      },
      clearAll: function() {
         this._arg1 = '';
         this._arg2 = '';
         this._operation = '';
         this._draw();
      },
      clear: function() {
         this._arg1 = this._arg1.slice(0, -1);
         this._draw();
      }
   }
}
