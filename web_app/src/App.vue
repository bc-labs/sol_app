<template>
  <div id="app">
    <div id="nav">
      <p>getMessage</p>
      <p>Message is:{{ message }}</p>

      <form v-on:submit.prevent="setMessage">
        <input id="setMessage" ref="setMessage" placeholder="edit me">
        <input type="submit" value="setMessage">
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Web3 from "web3";
import { Contract } from "web3/types.d";

import contractInfo from "./contractInfo";

// グローバル変数化
let web3: Web3;
let contract: Contract;

@Component
export default class Index extends Vue {
  // HTMLに渡る変数
  message = "get message...";
  address = "web3 addresses";

  /**
   * vue lifeサイクル
   * https://jp.vuejs.org/v2/guide/instance.html
   * mounted
   */
  mounted() {
    this.fetchWeb3(() => {
      this.fetchFromBlockchain();
    });
  }

  /**
   * ブロックチェーンに接続
   */
  async fetchFromBlockchain() {
    // web3アドレスを取得
    const addresses: string[] = await web3.eth.getAccounts();

    // web3のaddressを保持
    this.address = addresses[0];

    // contractに初期化
    contract = new web3.eth.Contract(
      contractInfo.Token.abi,
      contractInfo.Token.address
    );

    // contractにアクセスするためのパラメータ
    const param = { from: this.address };

    // contractのメソッドにアクセス
    this.message = await contract.methods.message().call(param);
  }

  /**
   * web3が使用できるか確認
   */
  fetchWeb3(onFinish: () => void) {
    window.addEventListener("load", () => {
      if (typeof window.web3 !== "undefined") {
        // MetaMaskがあるかチェック
        web3 = new Web3(window.web3.currentProvider);
        console.log("web3 found.");
        onFinish();
      } else {
        // MetaMaskがない
        alert("web3 not found.");
      }
    });
  }

  setMessage() {
    if (web3 === undefined || contract === undefined) {
      return;
    }

    const set_message = this.$refs.setMessage as HTMLInputElement;

    // トランザクションを実行
    contract.methods
      .setMessage(set_message.value)
      .send({ from: this.address, gas: 3000000, gasPrice: 1000000000 })
      .on("transactionHash", hash => {
        // Sending the transaction completed.
        this.transactions = [hash].concat(this.transactions);

        // フォームを初期化
        // set_message.value = "setMessage Now!";
      })
      .on("receipt", receipt => {
        // Mining completed.
      });
  }

  async awaitable(func: (resolve: () => void) => void): Promise<any> {
    return new Promise(resolve => func(resolve));
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
