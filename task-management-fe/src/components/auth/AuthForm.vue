<script setup>
defineProps({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    default: 'login'
  },
  isPending: {
    type: Boolean,
    default: false
  }
})
defineEmits(['update:email', 'update:password', 'formSubmit', 'authChange'])

function handleUnableToLogin() {
  Promise.reject({
    message: 'Tính năng này chưa được hỗ trợ'
  })
}
</script>

<template>
  <div :class="$style.formContainer">
    <div :class="$style.formHead">
      <span :class="$style.logo">
        <svg
          viewBox="0 0 94 32"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="uid1"
              x1="9.33821"
              y1="23.6824"
              x2="9.33821"
              y2="5.00599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0052CC" offset="0%"></stop>
              <stop stop-color="#2684FF" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="var(--ds-text, #172B4D)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.749 23.7902C66.249 23.7902 64.6742 22.5776 64.6742 19.7573V5H68.5155V19.2304C68.5155 20.0477 69.0574 20.3381 69.7131 20.3381C69.9021 20.3421 70.0911 20.3331 70.2789 20.3112V23.6315C69.7788 23.7552 69.2639 23.8086 68.749 23.7902ZM38.7121 9.98505V6.37431H26.0297V9.98505H30.3051V23.6825H34.4308V9.98505H38.7121ZM40.1498 23.6825H43.9641V16.6227C43.9641 14.464 45.2276 13.8053 47.9072 14.0149V10.027C45.8443 9.89522 44.6856 10.973 43.9641 12.7904V10.2096H40.1498V23.6825ZM72.6901 19.7573C72.6901 22.5776 74.2619 23.7902 76.7619 23.7902C77.2787 23.809 77.7957 23.7556 78.2978 23.6315V20.3112C78.109 20.333 77.9189 20.342 77.7289 20.3381C77.0732 20.3381 76.5313 20.0477 76.5313 19.2304V5H72.6901V19.7573ZM80.1444 16.9402C80.1444 12.7786 82.5396 9.93129 86.6653 9.93129C90.791 9.93129 93.1353 12.7845 93.1353 16.9402C93.1353 21.0958 90.764 24 86.6653 24C82.5665 24 80.1444 21.0749 80.1444 16.9402ZM83.8809 16.9402C83.8809 18.9701 84.7312 20.5749 86.6653 20.5749C88.5994 20.5749 89.3988 18.9701 89.3988 16.9402C89.3988 14.9103 88.5724 13.3474 86.6653 13.3474C84.7581 13.3474 83.8959 14.9103 83.8959 16.9402H83.8809ZM56.2777 18.3621C55.2023 18.3538 54.1281 18.2909 53.0592 18.1734C53.4124 20.0986 54.8256 20.7692 56.8795 20.7692C58.4004 20.7692 59.8854 20.3501 61.1998 19.9309V23.1734C59.7762 23.7133 58.2642 23.9824 56.7417 23.9668C51.6131 23.9668 49.3436 21.4009 49.3436 17.0806C49.3436 12.934 51.9723 9.94 56.0801 9.94C59.1309 9.94 61.6668 12.0058 61.6668 14.7513C61.6668 17.5776 59.1968 18.3621 56.2777 18.3621ZM57.9513 14.6166C57.9513 13.6136 57.0831 12.8801 56.0022 12.8801L55.9992 12.8711C55.4963 12.8789 55.0046 13.0206 54.5746 13.2816C54.1447 13.5426 53.7921 13.9135 53.5532 14.3561C53.2546 14.9118 53.0751 15.5236 53.0262 16.1525C53.686 16.2551 54.3525 16.3081 55.0202 16.3112C56.5861 16.3112 57.9513 15.91 57.9513 14.6166Z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4579 5H2.21854C1.63014 5 1.06585 5.23374 0.649794 5.64979C0.233738 6.06585 0 6.63014 0 7.21854V21.4669C0 22.0553 0.233738 22.6196 0.649794 23.0356C1.06585 23.4517 1.63014 23.6854 2.21854 23.6854H16.4579C17.0463 23.6854 17.6106 23.4517 18.0266 23.0356C18.4427 22.6196 18.6764 22.0553 18.6764 21.4669V7.22452C18.6772 6.93268 18.6204 6.64354 18.5093 6.37369C18.3981 6.10383 18.2348 5.85855 18.0287 5.65191C17.8227 5.44527 17.5778 5.28131 17.3083 5.16945C17.0387 5.05758 16.7497 5 16.4579 5V5ZM8.04481 18.4729C8.04481 18.6685 7.96731 18.8561 7.82927 18.9947C7.69123 19.1333 7.50391 19.2116 7.30829 19.2124H4.18558C3.98969 19.2116 3.80205 19.1334 3.66353 18.9949C3.52502 18.8564 3.44685 18.6688 3.44607 18.4729V9.19157C3.44685 8.99568 3.52502 8.80804 3.66353 8.66952C3.80205 8.53101 3.98969 8.45284 4.18558 8.45205H7.30829C7.50391 8.45285 7.69123 8.53111 7.82927 8.66971C7.96731 8.80831 8.04481 8.99595 8.04481 9.19157V18.4729ZM15.2304 14.2185C15.2296 14.4143 15.1514 14.602 15.0129 14.7405C14.8744 14.879 14.6867 14.9572 14.4908 14.958H11.3681C11.1725 14.9572 10.9852 14.8789 10.8471 14.7403C10.7091 14.6017 10.6316 14.4141 10.6316 14.2185V9.19157C10.6316 8.99595 10.7091 8.80831 10.8471 8.66971C10.9852 8.53111 11.1725 8.45285 11.3681 8.45205H14.4908C14.6867 8.45284 14.8744 8.53101 15.0129 8.66952C15.1514 8.80804 15.2296 8.99568 15.2304 9.19157V14.2185Z"
            fill="url(#uid1)"
          ></path>
        </svg>
      </span>
      <div class="title">
        <h5>
          {{ mode === 'login' ? 'Đăng nhập để tiếp tục' : 'Tạo tài khoản' }}
        </h5>
      </div>
    </div>
    <el-form @submit.prevent="$emit('formSubmit')">
      <el-input
        :disabled="isPending"
        type="email"
        native-type="email"
        placeholder="Enter email"
        required
        :class="$style.formInput"
        :model-value="email"
        @input="$emit('update:email', $event)"
      />
      <el-input
        :disabled="isPending"
        type="password"
        native-type="password"
        placeholder="Enter password"
        required
        show-password
        :class="$style.formInput"
        :model-value="password"
        @input="$emit('update:password', $event)"
      />
      <el-button
        :loading="isPending"
        native-type="submit"
        :class="$style.formButton"
        type="primary"
        size="large"
      >
        {{ mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản' }}
      </el-button>
    </el-form>
    <div :class="$style.formOption">
      <ul>
        <template v-if="mode === 'login'">
          <li>
            <a href="" @click.prevent="handleUnableToLogin"> Không thể đăng nhập? </a>
          </li>
          <p class="separator">•</p>
          <li>
            <a href="#" @click.prevent="$emit('authChange')"> Tạo tài khoản </a>
          </li>
        </template>
        <template v-else>
          <li>
            <a href="" @click.prevent="$emit('authChange')"> Đã có tài khoản? Đăng nhập ngay </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style module>
.formContainer {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 400px;
  padding: 32px 40px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-sizing: border-box;
  color: var(--ds-text-subtle, #42526e);
}

.formHead {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
}

.logo {
  display: inline-block;
  position: relative;
  color: var(--logo-color);
  fill: var(--logo-fill);
  line-height: 1;
  user-select: none;
  white-space: normal;
  height: 40px;
}
.formInput {
  margin-bottom: 8px;
}
.formInput > div {
  box-shadow: unset !important;
  background-color: #ffffff;
  border-color: #091e4224;
  color: #352c63;
  cursor: text;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  overflow: hidden;
  transition:
    background-color 0.2s ease-in-out 0s,
    border-color 0.2s ease-in-out 0s;
  overflow-wrap: break-word;
  vertical-align: top;
  pointer-events: auto;
}
.formInput > div:hover {
  background-color: #f7f8f9;
}
.formInput > div > input {
  color: inherit;
}
.formButton {
  width: 100%;
}
.formOption {
  color: #44546f;
  margin-top: 24px;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
}
.formOption ul {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  list-style: none;
  padding: 0px;
}
</style>

<style>
.el-input__wrapper.is-focus {
  background-color: #ffffff;
  border-color: #388bff;
}
</style>
