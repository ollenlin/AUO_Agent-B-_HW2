# Unit Converter Agent

一個支援多種量綱與單位系統的智慧單位換算 Agent，能夠處理常見與進階的單位換算需求，並提供公式說明、合理性檢查與客製化輸出格式。

---

## 功能特色

### 主要換算能力

#### 常見量綱

支援以下常見物理量換算：

* 長度（Length）
* 質量（Mass）
* 時間（Time）
* 溫度（Temperature）
* 體積（Volume）
* 面積（Area）
* 速度（Velocity）
* 加速度（Acceleration）
* 力（Force）
* 壓力（Pressure）
* 能量（Energy）
* 功率（Power）
* 功（Work）
* 頻率（Frequency）
* 角度（Angle）
* 濃度（Concentration）
* 資料量（Bit / Byte）

#### 常用單位系統

支援多種單位系統：

* SI 公制系統
* Imperial 英制
* US Customary 美制
* 海浬（Nautical Mile）
* 節（Knot）
* 加侖（Gallon）
* 卡路里（Calorie）
* BTU
* 其他常見工程與科學單位

#### 複合單位與單位代數

可解析與換算複合單位：

* m/s
* km/h
* N·m
* kg·m²/s³
* Pa·s
* J/s

並支援單位化簡與乘除運算。

#### SI 前綴支援

支援常見 SI Prefix：

| Prefix | Symbol | Factor |
| ------ | ------ | ------ |
| kilo   | k      | 10³    |
| mega   | M      | 10⁶    |
| giga   | G      | 10⁹    |
| milli  | m      | 10⁻³   |
| micro  | µ      | 10⁻⁶   |
| nano   | n      | 10⁻⁹   |

例如：

* km
* mm
* µs
* GJ
* mW

---

## 進階功能

### 準確換算係數

採用標準換算係數：

```text
1 lb = 0.45359237 kg
1 in = 2.54 cm
1 mile = 1.609344 km
```

必要時使用國際標準定義的精確值。

### 精度與四捨五入設定

支援：

* 指定小數位數
* 指定有效數字
* 自訂格式輸出

### 批次換算

可同時處理多筆資料：

| Input | Output     |
| ----- | ---------- |
| 10 km | 10000 m    |
| 70 kg | 154.324 lb |
| 25°C  | 77°F       |

### 公式與推導說明

例如溫度換算：

```text
°F = (°C × 9/5) + 32
```

系統可說明公式來源與推導過程。

### 合理性檢查

可偵測異常輸入：

* 低於絕對零度
* 負質量
* 不合理壓力值
* 超出常見工程範圍數值

### 多種表示方式

支援：

* 一般數字
* 科學記號
* 工程記號
* 自然語言描述

---

## 互動與客製化

### 自然語言輸入

支援：

```text
25°C 轉 °F
70 kg to lb
100 m^2 -> cm^2
1 atm to Pa
```

### 情境化建議

可依需求提供常用單位：

* 工程
* 醫療
* 氣象
* 航海
* 科學研究

### 自訂單位

可建立或使用使用者定義之單位與換算係數。

---

## 執行結果展示

### 結果一

![Capture1](./capture1.png)

### 結果二

![Capture2](./capture2.png)



