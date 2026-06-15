export const convertUnitTool = {
  type: "function",
  function: {
    name: "convert_unit",
    description: "進行單位換算，支援攝氏與華氏、公裡與英裡、公斤與磅之間的換算。",
    parameters: {
      type: "object",
      properties: {
        value: {
          type: "number",
          description: "要換算的數值，例如 25、10、70",
        },
        from_unit: {
          type: "string",
          description:
            "原始單位，例如 攝氏、華氏、celsius、fahrenheit、C、F、公裡、英裡、km、mile、公斤、磅、kg、lb",
        },
        to_unit: {
          type: "string",
          description:
            "目標單位，例如 攝氏、華氏、celsius、fahrenheit、C、F、公裡、英裡、km、mile、公斤、磅、kg、lb",
        },
      },
      required: ["value", "from_unit", "to_unit"],
    },
  },
};

function normalizeUnit(unit) {
  const normalized = String(unit).trim().toLowerCase();

  const unitMap = {
    // temperature
    c: "celsius",
    "°c": "celsius",
    celsius: "celsius",
    攝氏: "celsius",
    攝氏度: "celsius",

    f: "fahrenheit",
    "°f": "fahrenheit",
    fahrenheit: "fahrenheit",
    華氏: "fahrenheit",
    華氏度: "fahrenheit",

    // distance
    km: "kilometer",
    kms: "kilometer",
    kilometer: "kilometer",
    kilometers: "kilometer",
    公里: "kilometer",
    公裡: "kilometer",

    mile: "mile",
    miles: "mile",
    英里: "mile",
    英哩: "mile",

    // weight
    kg: "kilogram",
    kgs: "kilogram",
    kilogram: "kilogram",
    kilograms: "kilogram",
    公斤: "kilogram",

    lb: "pound",
    lbs: "pound",
    pound: "pound",
    pounds: "pound",
    磅: "pound",
  };

  return unitMap[normalized] || null;
}

function roundResult(value) {
  return Math.round(value * 10000) / 10000;
}

export async function convertUnit({ value, from_unit, to_unit }) {
  const from = normalizeUnit(from_unit);
  const to = normalizeUnit(to_unit);

  if (typeof value !== "number" || Number.isNaN(value)) {
    return {
      error: "Invalid value. value must be a number.",
    };
  }

  if (!from || !to) {
    return {
      error: `Unsupported unit. from_unit=${from_unit}, to_unit=${to_unit}`,
    };
  }

  if (from === to) {
    return {
      value,
      from_unit,
      to_unit,
      result: value,
      formula: "same unit",
    };
  }

  let result;
  let formula;

  if (from === "celsius" && to === "fahrenheit") {
    result = value * 9 / 5 + 32;
    formula = "°F = °C × 9/5 + 32";
  } else if (from === "fahrenheit" && to === "celsius") {
    result = (value - 32) * 5 / 9;
    formula = "°C = (°F - 32) × 5/9";
  } else if (from === "kilometer" && to === "mile") {
    result = value * 0.621371;
    formula = "1 km = 0.621371 mile";
  } else if (from === "mile" && to === "kilometer") {
    result = value / 0.621371;
    formula = "1 mile = 1 / 0.621371 km";
  } else if (from === "kilogram" && to === "pound") {
    result = value * 2.20462;
    formula = "1 kg = 2.20462 lb";
  } else if (from === "pound" && to === "kilogram") {
    result = value / 2.20462;
    formula = "1 lb = 1 / 2.20462 kg";
  } else {
    return {
      error: `Unsupported unit conversion: ${from_unit} to ${to_unit}`,
    };
  }

  return {
    value,
    from_unit,
    to_unit,
    result: roundResult(result),
    formula,
  };
}