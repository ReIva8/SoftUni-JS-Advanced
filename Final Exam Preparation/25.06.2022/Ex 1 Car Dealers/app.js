window.addEventListener("load", solve);

function solve() {
  const getById = (id) => document.getElementById(id);
  let totalPrice = 0;
  const [
    makeRef,
    modelRef,
    yearRef,
    fuelRef,
    originalCostRef,
    sellingPriceRef,
    publishBtnRef,
    tBodyRef,
    carsListRef,
    profitRef,
  ] = [
    getById('make'),
    getById('model'),
    getById('year'),
    getById('fuel'),
    getById('original-cost'),
    getById('selling-price'),
    getById('publish'),
    getById('table-body'),
    getById('cars-list'),
    getById('profit'),
  ];
 
  publishBtnRef.addEventListener('click', publishHandler);
 
  function publishHandler(e) {
    e.preventDefault();
    const [make, model, year, fuel, originalCost, sellingPrice] = [
      makeRef,
      modelRef,
      yearRef,
      fuelRef,
      originalCostRef,
      sellingPriceRef,
    ].map((x) => x.value);
 
    if (
      [make, model, year, fuel, originalCost, sellingPrice].some((x) => x === '') ||
      Number(originalCost) >= Number(sellingPrice)
    ) {
      return;
    }
    const tr = create(
      'tr',
      ['class', 'row'],
      create('td', make),
      create('td', model),
      create('td', year),
      create('td', fuel),
      create('td', originalCost),
      create('td', sellingPrice),
      create(
        'td',
        create('button', ['class', 'action-btn edit'], 'Edit', editHandler),
        create('button', ['class', 'action-btn sell'], 'Sell', sellHandler)
      )
    );
    tBodyRef.appendChild(tr);
    [makeRef, modelRef, yearRef, fuelRef, originalCostRef, sellingPriceRef].map(
      (x) => (x.value = '')
    );
 
    function editHandler() {
      const currentValues = [make, model, year, fuel, originalCost, sellingPrice];
      [makeRef, modelRef, yearRef, fuelRef, originalCostRef, sellingPriceRef, publishBtnRef].map(
        (x, i) => (x.value = currentValues[i])
      );
      tr.remove();
    }
    function sellHandler() {
      const difference = Number(sellingPrice) - Number(originalCost);
      const li = create(
        'li',
        ['class', 'each-list'],
        create('span', `${make} ${model}`),
        create('span', `${year}`),
        create('span', `${difference}`)
      );
      carsListRef.appendChild(li);
      totalPrice += difference;
      profitRef.textContent = totalPrice.toFixed(2);
      tr.remove();
    }
  }
 
  function create(type, ...content) {
    const el = document.createElement(type);
    content.map((c) =>
      typeof c === 'string'
        ? (el.textContent = c)
        : Array.isArray(c)
        ? el.setAttribute(c[0], c[1])
        : typeof c === 'function'
        ? el.addEventListener('click', c)
        : el.appendChild(c)
    );
    return el;
  }
}
