<template>
  <div class="calculator">
    <DisplayComponent :value="displayValue"></DisplayComponent>
    <ButtonComponent label="AC" triple @onClick="clearMemory"></ButtonComponent>
    <ButtonComponent label="/" operation @onClick="setOperation"></ButtonComponent>
    <ButtonComponent label="7" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="8" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="9" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="*" operation @onClick="setOperation"></ButtonComponent>
    <ButtonComponent label="4" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="5" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="6" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="-" operation @onClick="setOperation"></ButtonComponent>
    <ButtonComponent label="1" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="2" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="3" @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="+" operation @onClick="setOperation"></ButtonComponent>
    <ButtonComponent label="0" double @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="." @onClick="addDigit"></ButtonComponent>
    <ButtonComponent label="=" operation @onClick="setOperation"></ButtonComponent>
  </div>
</template>

<script>
import DisplayComponent from "../components/DisplayComponent.vue"
import ButtonComponent from "../components/ButtonComponent.vue"

export default {
  components: { ButtonComponent, DisplayComponent },
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    }
  },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data())
    },
    setOperation(operacao) {
      if (this.current === 0) {
        this.operation = operacao
        this.current = 1
        this.clearDisplay = true
      } else {
        const equals = operacao === "="
        const currentOperation = this.operation
        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          )
          if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
            this.clearMemory()
            return
          }
        } catch (e) {
          this.$emit('onError', e)
        }
        this.values[1] = 0
        this.displayValue = this.values[0]
        this.operation = equals ? null : operacao
        this.current = equals ? 0 : 1
        this.clearDisplay = !equals
      }
    },
    addDigit(digit) {
      if (digit === '.' && this.displayValue.includes('.')) {
        return
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay
      const currentValue = clearDisplay ? "" : this.displayValue
      const displayValue = currentValue + digit

      this.displayValue = displayValue
      this.clearDisplay = false
      this.values[this.current] = displayValue


    }
  }

}
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>