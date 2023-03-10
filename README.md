# π€ κ±°λ API νμ©, ν νλ‘μ νΈ

μ£Όμ΄μ§ APIλ₯Ό λΆμν΄ μ΄λ€ νλ‘μ νΈλ₯Ό μ§ν/μμ±ν  κ²μΈμ§ ν λ¨μλ‘ μμ λ‘­κ² κ²°μ νκ³  λ§λ€μ΄λ³΄μΈμ.

- κ³Όμ  κΈ°ν:
  - κ³Όμ  μν κΈ°κ°: 2023λ 01μ 30μΌ(μ) ~ 2023λ 02μ 24μΌ(κΈ)
  - μλ‘ λ¦¬λ·° κΈ°κ°: 2023λ 02μ 27μΌ(μ) ~ 2023λ 03μ 03μΌ(κΈ)

#### μ μΆ λ°©λ²:

`main` νΉμ λ€λ₯Έ μ¬λμ λΈλμΉλ‘ μ λ λ³ν©νμ§ μλλ‘ μ£ΌμνμΈμ!  
νΉμ λ¬Έμ κ° λ°μν κ²½μ°, λ°λ‘ κ°μ¬μκ² μλ €μ£ΌμΈμ!

1. νμ¬ κΉν μ μ₯μλ₯Ό ν΄λ‘ !
2. νμΈ κ°λ₯νλλ‘ λ³Έλͺ νΉμ ν μ΄λ¦μΌλ‘ λΈλμΉ μμ±! `KDT0_Team0`
3. κ³Όμ  μν ν μκ²© μ μ₯μλ‘ νΈμ! `git push origin KDT0_Team0`
4. νμ¬ κΉν μ μ₯μμμ `main` λΈλμΉλ‘ Pull Request μμ±νλ©΄ μ μΆ μλ£!
5. Pull Request μ€λͺμ κΌΌκΌΌνκ² μμ±!

## API μ¬μ©λ²

λͺ¨λ  API μμ²­(Request) `headers`μ μλ μ λ³΄κ° κΌ­ ν¬ν¨λΌμΌ ν©λλ€!  
`username`μ `KDT0_Team0`μ κ°μ΄ λ³Έλͺ νΉμ ν μ΄λ¦μ ν¬ν¨ν΄μΌ ν©λλ€!  
νμΈν  μ μλ μ¬μ©μλ νμ DB μ λ³΄λ μμλ‘ μ­μ λ  μ μμ΅λλ€!

```json
{
  "content-type": "application/json",
  "apikey": "FcKdtJs202301",
  "username": "KDT0_Team0"
}
```

<hr />

## μΈμ¦

'μΈμ¦' κ΄λ ¨ APIλ λͺ¨λ μΌλ° μ¬μ©μ μ μ©μλλ€.

### νμκ°μ

μ¬μ©μκ° `username`μ μ’μλμ΄ νμκ°μν©λλ€.

- μ¬μ©μ λΉλ°λ²νΈλ μνΈνν΄ μ μ₯ν©λλ€.(κ΄λ¦¬μλ νμΈν  μ μμ΅λλ€!)
- νλ‘ν μ΄λ―Έμ§λ 1MB μ΄νμ¬μΌ ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup
  \ -X 'POST'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  email: string; // μ¬μ©μ μμ΄λ (νμ!)
  password: string; // μ¬μ©μ λΉλ°λ²νΈ, 8μ μ΄μ (νμ!)
  displayName: string; // μ¬μ©μ μ΄λ¦, 20μ μ΄ν (νμ!)
  profileImgBase64?: string; // μ¬μ©μ νλ‘ν μ΄λ―Έμ§(base64) - jpg, jpeg, webp, png, gif, svg
}
```

```json
{
  "email": "thesecon@gmail.com",
  "password": "********",
  "displayName": "ParkYoungWoong",
  "profileImgBase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf...(μλ΅)"
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  user: {
    // νμκ°μν μ¬μ©μ μ λ³΄
    email: string; // μ¬μ©μ μμ΄λ
    displayName: string; // μ¬μ©μ νμ μ΄λ¦
    profileImg: string | null; // μ¬μ©μ νλ‘ν μ΄λ―Έμ§(URL)
  };
  accessToken: string; // μ¬μ©μ μ κ·Ό ν ν°
}
```

```json
{
  "user": {
    "email": "thesecon@gmail.com",
    "displayName": "ParkYoungWoong",
    "profileImg": "https://storage.googleapis.com/heropy-api/vjbtIrh5dGv163442.png"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlM3WDhpQ...(μλ΅)"
}
```

### λ‘κ·ΈμΈ

- λ°κΈλ `accessToken`μ 24μκ° ν λ§λ£λ©λλ€.(λ§λ£ ν λ€μ λ‘κ·ΈμΈ νμ)

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login
  \ -X 'POST'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  email: string; // μ¬μ©μ μμ΄λ (νμ!)
  password: string; // μ¬μ©μ λΉλ°λ²νΈ (νμ!)
}
```

```json
{
  "email": "thesecon@gmail.com",
  "password": "********"
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  user: {
    // νμκ°μν μ¬μ©μ μ λ³΄
    email: string; // μ¬μ©μ μμ΄λ
    displayName: string; // μ¬μ©μ νμ μ΄λ¦
    profileImg: string | null; // μ¬μ©μ νλ‘ν μ΄λ―Έμ§(URL)
  };
  accessToken: string; // μ¬μ©μ μ κ·Ό ν ν°
}
```

```json
{
  "user": {
    "email": "thesecon@gmail.com",
    "displayName": "ParkYoungWoong",
    "profileImg": "https://storage.googleapis.com/heropy-api/vAKjlJ-Gx5v163442.png"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlQS3I...(μλ΅)"
}
```

### μΈμ¦ νμΈ

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  email: string; // μ¬μ©μ μμ΄λ
  displayName: string; // μ¬μ©μ νμ μ΄λ¦
  profileImg: string | null; // μ¬μ©μ νλ‘ν μ΄λ―Έμ§(URL)
}
```

```json
{
  "email": "thesecon@gmail.com",
  "displayName": "ParkYoungWoong",
  "profileImg": "https://storage.googleapis.com/heropy-api/vAKjlJ-Gx5v163442.png"
}
```

### λ‘κ·Έμμ

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true; // λ‘κ·Έμμ μ²λ¦¬ μν
```

### μ¬μ©μ μ λ³΄ μμ 

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user
  \ -X 'PUT'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  displayName?: string; // μλ‘μ΄ νμ μ΄λ¦
  profileImgBase64?: string; // μ¬μ©μ νλ‘ν μ΄λ―Έμ§(base64) - jpg, jpeg, webp, png, gif, svg
  oldPassword?: string; // κΈ°μ‘΄ λΉλ°λ²νΈ
  newPassword?: string; // μλ‘μ΄ λΉλ°λ²νΈ
}
```

```json
{
  "oldPassword": "********",
  "newPassword": "**********"
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  email: string; // μ¬μ©μ μμ΄λ
  displayName: string; // μ¬μ©μ νμ μ΄λ¦
  profileImg: string | null; // μ¬μ©μ νλ‘ν μ΄λ―Έμ§(URL)
}
```

```json
{
  "email": "thesecon@gmail.com",
  "displayName": "ParkYoungWoong",
  "profileImg": "https://storage.googleapis.com/heropy-api/vAKjlJ-Gx5v163442.png"
}
```

<hr />

## κ³μ’

'κ³μ’' κ΄λ ¨ APIλ λͺ¨λ μΌλ° μ¬μ©μ μ μ©μλλ€.

### μ ν κ°λ₯ν μν λͺ©λ‘ μ‘°ν

- μν λΉ νλμ κ³μ’λ§ νμ©λ©λλ€.
- μ¬μ©μκ° κ³μ’λ₯Ό μΆκ°νλ©΄, ν΄λΉ μν μ λ³΄ `disabled` μμ±μ΄ `true`λ‘ λ³κ²½λ©λλ€.
- μν μ λ³΄ `digits` μμ±μ μ«μλ₯Ό λͺ¨λ λνλ©΄ κ° μνμ μ ν¨ν κ³μ’λ²νΈ κΈΈμ΄κ° λ©λλ€.
- `[3, 2, 4, 3]` => 123-12-1234-123

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks
  \ -X 'GET'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = Bank[]; // μ ν κ°λ₯ν μν μ λ³΄ λͺ©λ‘

interface Bank {
  // μ ν κ°λ₯ν μν μ λ³΄
  name: string; // μν μ΄λ¦
  code: string; // μν μ½λ
  digits: number[]; // μν κ³μ’ μλ¦Ώμ
  disabled: boolean; // μ¬μ©μκ° μΆκ°ν κ³μ’ μ¬λΆ
}
```

```json
[
  {
    "name": "KBκ΅­λ―Όμν",
    "code": "004",
    "digits": [3, 2, 4, 3],
    "disabled": false
  },
  {
    "name": "μ νμν",
    "code": "088",
    "digits": [3, 3, 6],
    "disabled": true
  },
  {
    "name": "μ°λ¦¬μν",
    "code": "020",
    "digits": [4, 3, 6],
    "disabled": true
  },
  {
    "name": "νλμν",
    "code": "081",
    "digits": [3, 6, 5],
    "disabled": false
  },
  {
    "name": "μΌμ΄λ±ν¬",
    "code": "089",
    "digits": [3, 3, 6],
    "disabled": false
  },
  {
    "name": "μΉ΄μΉ΄μ€λ±ν¬",
    "code": "090",
    "digits": [4, 2, 7],
    "disabled": false
  },
  {
    "name": "NHλνμν",
    "code": "011",
    "digits": [3, 4, 4, 2],
    "disabled": false
  }
]
```

### κ³μ’ λͺ©λ‘ λ° μμ‘ μ‘°ν

- κ³μ’λ²νΈλ μΌλΆλ§ λΈμΆλ©λλ€. E.g. `"123-XXXX-XXXX-XX"`
- μμ‘μ λ¨μλ 'μν(οΏ¦)'μλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account
  \ -X 'GET'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  totalBalance: number; // μ¬μ©μ κ³μ’ μμ‘ μ΄ν©
  accounts: Bank[]; // μ¬μ©μ κ³μ’ μ λ³΄ λͺ©λ‘
}

interface Bank {
  // μ¬μ©μ κ³μ’ μ λ³΄
  id: string; // κ³μ’ ID
  bankName: string; // μν μ΄λ¦
  bankCode: string; // μν μ½λ
  accountNumber: string; // κ³μ’ λ²νΈ
  balance: number; // κ³μ’ μμ‘
}
```

```json
{
  "totalBalance": 5999900,
  "accounts": [
    {
      "id": "jQMfKla8vOIFELA3mAXv",
      "bankName": "NHλνμν",
      "bankCode": "011",
      "accountNumber": "356-XXXX-XXXX-XX",
      "balance": 2999900
    },
    {
      "id": "wiPgsXvMAmcLw8AuRHIi",
      "bankName": "KBκ΅­λ―Όμν",
      "bankCode": "004",
      "accountNumber": "123-XX-XXXX-XXX",
      "balance": 3000000
    }
  ]
}
```

### κ³μ’ μ°κ²°

- μ°κ²°λ κ³μ’ μμ‘μλ μλμΌλ‘ κΈ°λ³Έ '3λ°±λ§μ'μ΄ μΆκ°λ©λλ€.
- μμ²­νλ κ³μ’λ²νΈμ μ νλ²νΈμλ `-` κ΅¬λΆμ΄ μμ΄μΌ ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  bankCode: string; // μ°κ²°ν  μν μ½λ (νμ!)
  accountNumber: string; // μ°κ²°ν  κ³μ’λ²νΈ (νμ!)
  phoneNumber: string; // μ¬μ©μ μ νλ²νΈ (νμ!)
  signature: boolean; // μ¬μ©μ μλͺ (νμ!)
}
```

```json
{
  "bankCode": "088",
  "accountNumber": "123456789012",
  "phoneNumber": "01012345678",
  "signature": true
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  // μ°κ²°λ κ³μ’ μ λ³΄
  id: string; // κ³μ’ ID
  bankName: string; // μν μ΄λ¦
  bankCode: string; // μν μ½λ
  accountNumber: string; // κ³μ’ λ²νΈ
  balance: number; // κ³μ’ μμ‘
}
```

```json
{
  "id": "1qRFC6Ey5VkSu6nyj5Ba",
  "bankName": "μ νμν",
  "bankCode": "088",
  "accountNumber": "123-XXX-XXXXXX",
  "balance": 3000000
}
```

### κ³μ’ ν΄μ§

- ν΄μ§ν κ³μ’λ λ€μ μ°κ²°ν΄λ μμ‘μ΄ λ°μλμ§ μμ΅λλ€.(κΈ°λ³Έ κΈμ‘μΌλ‘ μΆκ°λ©λλ€)

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account
  \ -X 'DELETE'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  accountId: string; // κ³μ’ ID (νμ!)
  signature: boolean; // μ¬μ©μ μλͺ (νμ!)
}
```

```json
{
  "accountId": "jQMfKla8vOIFELA3mAXv",
  "signature": true
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true; // κ³μ’ ν΄μ§ μ²λ¦¬ μν
```

<hr />

## μ ν

'μ ν' κ΄λ ¨ APIλ κ΄λ¦¬μ μ μ©κ³Ό μΌλ° μ¬μ©μ μ μ©μΌλ‘ κ΅¬λΆλ©λλ€.<br>
κ³΅μ© APIλ μμΌλ μ£ΌμνμΈμ!

### λͺ¨λ  μ ν μ‘°ν

- κ΄λ¦¬μ μ μ© APIμλλ€.
- μμΈ μ λ³΄κ° μλ κΈ°λ³Έ μ λ³΄μ μ ν μ€λͺμ 100μκΉμ§λ§ ν¬ν¨λ©λλ€.
- μμΈ μ λ³΄κ° μλ κΈ°λ³Έ μ λ³΄μ μ ν μμΈ μ¬μ§μ ν¬ν¨λμ§ μμ΅λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products
  \ -X 'GET'
  \ -H 'masterKey: true'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = Product[]; // κ΄λ¦¬νλ λͺ¨λ  μ νμ λͺ©λ‘

interface Product {
  // μ ν μ λ³΄
  id: string; // μ ν ID
  title: string; // μ ν μ΄λ¦
  price: number; // μ ν κ°κ²©
  description: string; // μ ν μ€λͺ(μ΅λ 100μ)
  tags: string[]; // μ ν νκ·Έ
  thumbnail: string | null; // μ ν μΈλ€μΌ μ΄λ―Έμ§(URL)
  isSoldOut: boolean; // μ ν λ§€μ§ μ¬λΆ
}
```

```json
[
  {
    "id": "cFmeC7aY5KjZbBAdJE9y",
    "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
    "price": 639000,
    "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
    "tags": ["κ°μ ", "λͺ¨λν°", "μ»΄ν¨ν°"],
    "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png",
    "isSoldOut": false
  },
  {
    "id": "nbqtQvEivYwEXTDet7YM",
    "title": "MacBook Pro 16",
    "price": 3360000,
    "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±",
    "tags": ["κ°μ ", "λΈνΈλΆ", "μ»΄ν¨ν°"],
    "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
    "isSoldOut": false
  }
]
```

### μ μ²΄ κ±°λ(νλ§€) λ΄μ­

- κ΄λ¦¬μ μ μ© APIμλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/all
  \ -X 'GET'
  \ -H 'masterKey: true'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type RequestValue = TransactionDetail[]; // λͺ¨λ  κ±°λ λ΄μ­μ λͺ©λ‘

interface TransactionDetail {
  // κ±°λ λ΄μ­ μ λ³΄
  detailId: string; // κ±°λ λ΄μ­ ID
  user: {
    // κ±°λν μ¬μ©μ μ λ³΄
    email: string;
    displayName: string;
    profileImg: string | null;
  };
  account: {
    // κ±°λν μ¬μ©μμ κ³μ’ μ λ³΄
    bankName: string;
    bankCode: string;
    accountNumber: string;
  };
  product: {
    // κ±°λν μ ν μ λ³΄
    productId: string;
    title: string;
    price: number;
    description: string;
    tags: string[];
    thumbnail: string | null;
  };
  reservation: Reservation | null; // κ±°λν μ νμ μμ½ μ λ³΄
  timePaid: string; // μ νμ κ±°λν μκ°
  isCanceled: boolean; // κ±°λ μ·¨μ μ¬λΆ
  done: boolean; // κ±°λ μλ£ μ¬λΆ
}

interface Reservation {
  start: string; // μμ½ μμ μκ°
  end: string; // μμ½ μ’λ£ μκ°
  isCanceled: boolean; // μμ½ μ·¨μ μ¬λΆ
  isExpired: boolean; // μμ½ λ§λ£ μ¬λΆ
}
```

```json
[
  {
    "detailId": "dMhfxyrAupQP18OYmywy",
    "user": {
      "email": "thesecon@gmail.com",
      "displayName": "ParkYoungWoong",
      "profileImg": "https://storage.googleapis.com/heropy-api/vsLRqTlPO5v200111.png"
    },
    "account": {
      "bankName": "KBκ΅­λ―Όμν",
      "bankCode": "004",
      "accountNumber": "123-XX-XXXX-XXX"
    },
    "product": {
      "productId": "cFmeC7aY5KjZbBAdJE9y",
      "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
      "price": 639000,
      "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
      "tags": ["κ°μ ", "λͺ¨λν°", "μ»΄ν¨ν°"],
      "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png"
    },
    "reservation": null,
    "timePaid": "2021-11-07T20:01:49.100Z",
    "isCanceled": false,
    "done": false
  }
]
```

μμ½ μ λ³΄(`reservation`)κ° μλ κ²½μ°:

```json
[
  {
    "reservation": {
      "start": "2021-11-12T06:00:00.000Z",
      "end": "2021-11-12T07:00:00.000Z",
      "isCanceled": false,
      "isExpired": true
    }
  }
]
```

### κ±°λ(νλ§€) λ΄μ­ μλ£/μ·¨μ λ° ν΄μ 

- κ΄λ¦¬μ μ μ© APIμλλ€.
- κ±°λ λ΄μ­μ μ·¨μνλ©΄, μμ½λ κ°μ΄ μ·¨μλ©λλ€.
- κ±°λ λ΄μ­μ μ·¨μ ν΄μ νλ©΄, μμ½λ κ°μ΄ μ·¨μκ° ν΄μ λ©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/:detailId
  \ -X 'PUT'
  \ -H 'masterKey: true'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  isCanceled?: boolean; // κ±°λ μ·¨μ μ¬λΆ (μ¬μ©μμ 'μ ν κ±°λ(κ΅¬λ§€) μ·¨μ' μνμ κ°μ΅λλ€)
  done?: boolean; // κ±°λ μλ£ μ¬λΆ (μ¬μ©μμ 'μ ν κ±°λ(κ΅¬λ§€) νμ ' μνμ κ°μ΅λλ€)
}
```

```json
{
  "isCanceled": true
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true; // κ±°λ λ΄μ­ μλ£/μ·¨μ λ° ν΄μ  μ²λ¦¬ μν
```

### μ ν μΆκ°

- κ΄λ¦¬μ μ μ© APIμλλ€.
- νμΌ(μ¬μ§)μ Base64λ‘ μμ²­ν΄μΌ ν©λλ€.
- μ ν μΈλ€μΌ μ¬μ§μ 1MB μ΄νμ¬μΌ ν©λλ€.
- μ ν μμΈ μ¬μ§μ 4MB μ΄νμ¬μΌ ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products
  \ -X 'POST'
  \ -H 'masterKey: true'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  title: string; // μ ν μ΄λ¦ (νμ!)
  price: number; // μ ν κ°κ²© (νμ!)
  description: string; // μ ν μμΈ μ€λͺ (νμ!)
  tags?: string[]; // μ ν νκ·Έ
  thumbnailBase64?: string; // μ ν μΈλ€μΌ(λν) μ¬μ§(base64) - jpg, jpeg, webp, png, gif, svg
  photoBase64?: string; // μ ν μμΈ μ¬μ§(base64) - jpg, jpeg, webp, png, gif, svg
}
```

```json
{
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±λ₯κ³Ό λλΌμ΄ λ°°ν°λ¦¬ μ¬μ© μκ°μ μλνμ£ . μ¬κΈ°μ μμ μ μ¬λ‘μ‘λ Liquid Retina XDR λμ€νλ μ΄, Mac λΈνΈλΆ μ¬μ μ΅κ³ μ μΉ΄λ©λΌ λ° μ€λμ€ κ·Έλ¦¬κ³  λν  λμ μμ΄ λ€μν ν¬νΈκΉμ§. κΈ°μ‘΄ κ·Έ μ΄λ€ μΉ΄νκ³ λ¦¬μλ μνμ§ μλ λΈνΈλΆ. μλ‘μ΄ MacBook Proλ κ·ΈμΌλ§λ‘ μΌμμλλ€.",
  "tags": ["κ°μ ", "λΈνΈλΆ", "μ»΄ν¨ν°"],
  "thumbnailBase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...(μλ΅)"
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  // μΆκ°ν μ νμ μμΈ λ΄μ©
  id: string; // μ ν ID
  title: string; // μ ν μ΄λ¦
  price: number; // μ ν κ°κ²©
  description: string; // μ ν μμΈ μ€λͺ
  tags: string[]; // μ ν νκ·Έ
  thumbnail: string | null; // μ ν μΈλ€μΌ μ΄λ―Έμ§(URL)
  photo: string | null; // μ ν μμΈ μ΄λ―Έμ§(URL)
  isSoldOut: boolean; // μ ν λ§€μ§ μ¬λΆ
}
```

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±λ₯κ³Ό λλΌμ΄ λ°°ν°λ¦¬ μ¬μ© μκ°μ μλνμ£ . μ¬κΈ°μ μμ μ μ¬λ‘μ‘λ Liquid Retina XDR λμ€νλ μ΄, Mac λΈνΈλΆ μ¬μ μ΅κ³ μ μΉ΄λ©λΌ λ° μ€λμ€ κ·Έλ¦¬κ³  λν  λμ μμ΄ λ€μν ν¬νΈκΉμ§. κΈ°μ‘΄ κ·Έ μ΄λ€ μΉ΄νκ³ λ¦¬μλ μνμ§ μλ λΈνΈλΆ. μλ‘μ΄ MacBook Proλ κ·ΈμΌλ§λ‘ μΌμμλλ€.",
  "tags": ["κ°μ ", "λΈνΈλΆ", "μ»΄ν¨ν°"],
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "isSoldOut": false
}
```

### μ ν μμ 

- κ΄λ¦¬μ μ μ© APIμλλ€.
- μ¬μ©μμ κ΅¬λ§€ λ΄μ­ νμΈμ μν΄, μ νμ μ€μ λ‘λ μ­μ νμ§ μκ³  λ§€μ§(Sold Out) μ²λ¦¬ν΄μΌ ν©λλ€.
- λ§€μ§μ λ€μ ν΄μ ν  μ μμ΅λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId
  \ -X 'PUT'
  \ -H 'masterKey: true'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  title?: string; // μ ν μ΄λ¦
  price?: number; // μ ν κ°κ²©
  description?: string; // μ ν μμΈ μ€λͺ
  tags?: string[]; // μ ν νκ·Έ
  thumbnailBase64?: string; // μ ν μΈλ€μΌ(λν) μ¬μ§(base64) - jpg, jpeg, webp, png, gif, svg
  photoBase64?: string; // μ ν μμΈ μ¬μ§(base64) - jpg, jpeg, webp, png, gif, svg
  isSoldOut?: boolean; // μ ν λ§€μ§ μ¬λΆ
}
```

```json
{
  "price": 1500
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  // μμ ν μ νμ μμΈ λ΄μ©
  id: string; // μ ν ID
  title: string; // μ ν μ΄λ¦
  price: number; // μ ν κ°κ²©
  description: string; // μ ν μμΈ μ€λͺ
  tags: string[]; // μ ν νκ·Έ
  thumbnail: string | null; // μ ν μΈλ€μΌ μ΄λ―Έμ§(URL)
  photo: string | null; // μ ν μμΈ μ΄λ―Έμ§(URL)
  isSoldOut: boolean; // μ ν λ§€μ§ μ¬λΆ
}
```

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 1500,
  "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±λ₯κ³Ό λλΌμ΄ λ°°ν°λ¦¬ μ¬μ© μκ°μ μλνμ£ . μ¬κΈ°μ μμ μ μ¬λ‘μ‘λ Liquid Retina XDR λμ€νλ μ΄, Mac λΈνΈλΆ μ¬μ μ΅κ³ μ μΉ΄λ©λΌ λ° μ€λμ€ κ·Έλ¦¬κ³  λν  λμ μμ΄ λ€μν ν¬νΈκΉμ§. κΈ°μ‘΄ κ·Έ μ΄λ€ μΉ΄νκ³ λ¦¬μλ μνμ§ μλ λΈνΈλΆ. μλ‘μ΄ MacBook Proλ κ·ΈμΌλ§λ‘ μΌμμλλ€.",
  "tags": ["κ°μ ", "λΈνΈλΆ", "μ»΄ν¨ν°"],
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "isSoldOut": false
}
```

### μ ν μ­μ 

- κ΄λ¦¬μ μ μ© APIμλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId
  \ -X 'DELETE'
  \ -H 'masterKey: true'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true; // μ ν μ­μ  μ²λ¦¬ μν
```

### λ¨μΌ μ ν μμΈ μ‘°ν

- κ³΅μ© APIμλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId
  \ -X 'GET'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  // μ νμ μμΈ λ΄μ©
  id: string; // μ ν ID
  title: string; // μ ν μ΄λ¦
  price: number; // μ ν κ°κ²©
  description: string; // μ ν μμΈ μ€λͺ
  tags: string[]; // μ ν νκ·Έ
  thumbnail: string | null; // μ ν μΈλ€μΌ μ΄λ―Έμ§(URL)
  photo: string | null; // μ ν μμΈ μ΄λ―Έμ§(URL)
  isSoldOut: boolean; // μ ν λ§€μ§ μ¬λΆ
  reservations: Reservation[]; // μ νμ λͺ¨λ  μμ½ μ λ³΄ λͺ©λ‘
}

interface Reservation {
  start: string; // μμ½ μμ μκ°
  end: string; // μμ½ μ’λ£ μκ°
  isCanceled: boolean; // μμ½ μ·¨μ μ¬λΆ
  isExpired: boolean; // μμ½ λ§λ£ μ¬λΆ
}
```

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±λ₯κ³Ό λλΌμ΄ λ°°ν°λ¦¬ μ¬μ© μκ°μ μλνμ£ . μ¬κΈ°μ μμ μ μ¬λ‘μ‘λ Liquid Retina XDR λμ€νλ μ΄, Mac λΈνΈλΆ μ¬μ μ΅κ³ μ μΉ΄λ©λΌ λ° μ€λμ€ κ·Έλ¦¬κ³  λν  λμ μμ΄ λ€μν ν¬νΈκΉμ§. κΈ°μ‘΄ κ·Έ μ΄λ€ μΉ΄νκ³ λ¦¬μλ μνμ§ μλ λΈνΈλΆ. μλ‘μ΄ MacBook Proλ κ·ΈμΌλ§λ‘ μΌμμλλ€.",
  "tags": ["κ°μ ", "λΈνΈλΆ", "μ»΄ν¨ν°"],
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "isSoldOut": false,
  "reservations": []
}
```

μμ½ μ λ³΄(`reservation`)κ° μλ κ²½μ°:

```json
{
  "reservations": [
    {
      "reservation": {
        "start": "2021-11-12T06:00:00.000Z",
        "end": "2021-11-12T07:00:00.000Z",
        "isCanceled": false,
        "isExpired": true
      }
    }
  ]
}
```

### μ ν κ²μ

- μ¬μ©μ μ μ© APIμλλ€.
- μ ν μ΄λ¦κ³Ό νκ·Έλ₯Ό λμμ κ²μν  μ μκ³ , 'And'(κ²μν μ΄λ¦κ³Ό νκ·Έ λͺ¨λ ν¬ν¨λ μ ν) μ‘°κ±΄μΌλ‘ κ²°κ³Όλ₯Ό λ°νν©λλ€.
- μ ν μ΄λ¦κ³Ό νκ·Έ λͺ¨λ ν¬ν¨νμ§ μμΌλ©΄, λͺ¨λ  μ νμ κ²°κ³Όλ₯Ό λ°νν©λλ€.
- μ νμ κΈ°λ³Έ μ λ³΄λ§ λ°νν©λλ€.
- λ§€μ§λ μ νμ κ²μλμ§ μμ΅λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search
  \ -X 'POST'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  searchText?: string; // κ²μν  μ ν μ΄λ¦
  searchTags?: string[]; // κ²μν  μ ν νκ·Έ
}
```

```json
{
  "searchText": "μΌμ±μ μ",
  "searchTags": ["κ°μ "]
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = Product[]; // κ΄λ¦¬νλ λͺ¨λ  μ νμ λͺ©λ‘

interface Product {
  // μ ν μ λ³΄
  id: string; // μ ν ID
  title: string; // μ ν μ΄λ¦
  price: number; // μ ν κ°κ²©
  description: string; // μ ν μ€λͺ(μ΅λ 100μ)
  tags: string[]; // μ ν νκ·Έ
  thumbnail: string | null; // μ ν μΈλ€μΌ μ΄λ―Έμ§(URL)
}
```

```json
[
  {
    "id": "cFmeC7aY5KjZbBAdJE9y",
    "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
    "price": 639000,
    "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
    "tags": ["κ°μ ", "λͺ¨λν°", "μ»΄ν¨ν°"],
    "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png"
  }
]
```

### μ ν κ±°λ(κ΅¬λ§€) μ μ²­

- μ¬μ©μ μ μ© APIμλλ€.
- κ±°λ(κ΅¬λ§€) μ μ²­μ μ°κ²°λ κ³μ’μμ κ²°μ λ©λλ€.
- κ²°μ ν  κ³μ’(ID)λ₯Ό κΌ­ μ νν΄μΌ ν©λλ€.(`κ³μ’ λͺ©λ‘ λ° μμ‘ μ‘°ν` APIλ₯Ό μ¬μ©νμΈμ)
- μ νν κ³μ’μ μμ‘λ³΄λ€ κ²°μ  κΈμ‘μ΄ ν¬λ©΄ κ²°μ κ° μ²λ¦¬λμ§ μμ΅λλ€.(μλ¬ λ°ν)

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  productId: string; // κ±°λν  μ ν ID (νμ!)
  accountId: string; // κ²°μ ν  μ¬μ©μ κ³μ’ ID (νμ!)
  reservation?: {
    // μμ½ μ λ³΄(μμ½ μμ€νμ μ¬μ©νλ κ²½μ°λ§ νμ)
    start: string; // μμ½ μμ μκ°(ISO)
    end: string; // μμ½ μ’λ£ μκ°(ISO)
  };
}
```

```js
const isoString = new Date().toISOString();
```

```json
{
  "productId": "nbqtQvEivYwEXTDet7YM",
  "accountId": "Mq2KKHk8vlmr6Xkg58Fa",
  "reservation": {
    "start": "2021-11-12T06:00:00.000Z",
    "end": "2021-11-12T07:00:00.000Z"
  }
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true; // κ±°λ μ μ²­ μ²λ¦¬ μ¬λΆ
```

### μ ν κ±°λ(κ΅¬λ§€) μ·¨μ

- μ¬μ©μ μ μ© APIμλλ€.
- 'κ±°λ μ·¨μ'μ κ²°μ ν μ¬μ©μ κ³μ’λ‘ κΈμ‘μ΄ νλΆλ©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/cancel
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  detailId: string; // μ·¨μν  μ νμ κ±°λ λ΄μ­ ID
}
```

```json
{
  "detailId": "dMhfxyrAupQP18OYmywy"
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true; // κ±°λ μ·¨μ μ²λ¦¬ μ¬λΆ
```

### μ ν κ±°λ(κ΅¬λ§€) νμ 

- μ¬μ©μ μ μ© APIμλλ€.
- 'κ±°λ(κ΅¬λ§€) νμ ' νμλ 'κ±°λ μ·¨μ'λ₯Ό ν  μ μμ΅λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/ok
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  detailId: string; // κ±°λ(κ΅¬λ§€) νμ ν  μ νμ κ±°λ λ΄μ­ ID
}
```

```json
{
  "detailId": "dMhfxyrAupQP18OYmywy"
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true; // κ±°λ(κ΅¬λ§€) νμ  μ²λ¦¬ μ¬λΆ
```

### μ ν μ μ²΄ κ±°λ(κ΅¬λ§€) λ΄μ­

- μ¬μ©μ μ μ© APIμλλ€.
- κ±°λ λ΄μ­μ κΈ°λ³Έ μ λ³΄λ§ ν¬ν¨λ©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/details
  \ -X 'GET'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type RequestValue = TransactionDetail[]; // λͺ¨λ  κ±°λ λ΄μ­μ λͺ©λ‘

interface TransactionDetail {
  // κ±°λ λ΄μ­ μ λ³΄
  detailId: string; // κ±°λ λ΄μ­ ID
  product: {
    // κ±°λν μ ν μ λ³΄
    productId: string;
    title: string;
    price: number;
    description: string;
    tags: string[];
    thumbnail: string | null;
  };
  reservation: Reservation | null; // κ±°λν μ νμ μμ½ μ λ³΄
  timePaid: string; // μ νμ κ±°λν μκ°
  isCanceled: boolean; // κ±°λ μ·¨μ μ¬λΆ
  done: boolean; // κ±°λ μλ£ μ¬λΆ
}

interface Reservation {
  start: string; // μμ½ μμ μκ°
  end: string; // μμ½ μ’λ£ μκ°
  isCanceled: boolean; // μμ½ μ·¨μ μ¬λΆ
  isExpired: boolean; // μμ½ λ§λ£ μ¬λΆ
}
```

```json
[
  {
    "detailId": "9jAoagzrZBkSWI5NctEB",
    "product": {
      "productId": "nbqtQvEivYwEXTDet7YM",
      "title": "MacBook Pro 16",
      "price": 3360000,
      "description": "μ­λ κ°μ₯ κ°λ ₯ν MacBook Proκ° λ±μ₯νμ΅λλ€. μ΅μ΄μ νλ‘μ© Apple SiliconμΈ M1 Pro λλ M1 Max μΉ©μ νμ¬ν΄ μμ΄κ°μ΄ λΉ λ₯Έ μλλ λ¬Όλ‘ , νκΈ°μ μΈ μ±",
      "tags": ["κ°μ ", "λΈνΈλΆ", "μ»΄ν¨ν°"],
      "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png"
    },
    "reservation": null,
    "timePaid": "2021-11-07T20:17:32.112Z",
    "isCanceled": true,
    "done": false
  },
  {
    "detailId": "dMhfxyrAupQP18OYmywy",
    "product": {
      "productId": "cFmeC7aY5KjZbBAdJE9y",
      "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
      "price": 639000,
      "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,00",
      "tags": ["κ°μ ", "λͺ¨λν°", "μ»΄ν¨ν°"],
      "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png"
    },
    "reservation": {
      "start": "2021-11-12T06:00:00.000Z",
      "end": "2021-11-12T07:00:00.000Z",
      "isCanceled": false,
      "isExpired": true
    },
    "timePaid": "2021-11-07T20:01:49.100Z",
    "isCanceled": false,
    "done": true
  }
]
```

### λ¨μΌ μ ν μμΈ κ±°λ(κ΅¬λ§€) λ΄μ­

- μ¬μ©μ μ μ© APIμλλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/detail
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  detailId: string; // μμΈ λ΄μ©μ νμΈν  κ±°λ(κ΅¬λ§€) λ΄μ­ ID
}
```

```json
{
  "detailId": "dMhfxyrAupQP18OYmywy"
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface TransactionDetail {
  // μμΈ κ±°λ μ λ³΄
  detailId: string; // κ±°λ λ΄μ­ ID
  account: {
    // κ±°λν μ¬μ©μμ κ³μ’ μ λ³΄
    bankName: string;
    bankCode: string;
    accountNumber: string;
  };
  product: {
    // κ±°λν μ ν μ λ³΄
    productId: string;
    title: string;
    price: number;
    description: string;
    tags: string[];
    thumbnail: string | null;
    photo: string | null;
  };
  reservation: Reservation | null; // κ±°λν μ νμ μμ½ μ λ³΄
  timePaid: string; // μ νμ κ±°λν μκ°
  isCanceled: boolean; // κ±°λ μ·¨μ μ¬λΆ
  done: boolean; // κ±°λ μλ£ μ¬λΆ
}

interface Reservation {
  start: string; // μμ½ μμ μκ°
  end: string; // μμ½ μ’λ£ μκ°
  isCanceled: boolean; // μμ½ μ·¨μ μ¬λΆ
  isExpired: boolean; // μμ½ λ§λ£ μ¬λΆ
}
```

```json
{
  "detailId": "dMhfxyrAupQP18OYmywy",
  "account": {
    "bankName": "KBκ΅­λ―Όμν",
    "bankCode": "004",
    "accountNumber": "123-XX-XXXX-XXX"
  },
  "product": {
    "productId": "cFmeC7aY5KjZbBAdJE9y",
    "title": "μΌμ±μ μ μ€λ§νΈλͺ¨λν° M7 S43AM700",
    "price": 639000,
    "description": "107.9cm(43μΈμΉ) / μμ΄λ(16:9) / νλ©΄ / VA / 3840 x 2160(4K UHD) / ν½μνΌμΉ: 0.2451mm / 8ms(GTG) / 300cd / 5,000:1 / μ΅λ μ£Όμ¬μ¨: 60Hz / HDMI 2.0 / USB Type-C / νλ¦¬μ»€ νλ¦¬ / λΈλ£¨λΌμ΄νΈ μ°¨λ¨ / κ²μλͺ¨λ μ§μ / μ€νΌμ»€ / λ¦¬λͺ¨μ»¨ / USBνλΈ / Wi-Fi(λ¬΄μ ) / μ€λ§νΈTV / λΈλ£¨ν¬μ€ / νΈνΈ(μν) / 200 x 200mm / HDR / HDR10 / 10.6kg κΈ°νμ  μ°¨μΈλ κ²μ λΌμ΄ν PS5 λ§€λ ₯λΆμ κ΄λ ¨κΈ°μ¬ νμλ, 43μΈμΉ 4K UHD μ€λ§νΈ λͺ¨λν° βμΌμ±μ μ M7 S43AM700β μΆμ λ° ν μΈ νμ¬ μ¬μ©κΈ° μΌμ± μ€λ§νΈλͺ¨λν° m7 s43am700",
    "tags": ["κ°μ ", "λͺ¨λν°", "μ»΄ν¨ν°"],
    "thumbnail": "https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png",
    "photo": "https://storage.googleapis.com/heropy-api/vVLP-ox_zSDv195712.jpg"
  },
  "reservation": null,
  "timePaid": "2021-11-07T20:01:49.100Z",
  "isCanceled": false,
  "done": true
}
```

> > > > > > > team1/Team1
