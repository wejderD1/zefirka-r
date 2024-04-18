function RadioButtonGroupe({ radioItems, onChangeHandler, selectedOption }) {
  //created categories block (ratio buttons)
  const categoriesRadio = radioItems.map((el, i) => {

    return (
      <label key={i}>
        <input
          className="categories__radio"
          key={i}
          type="radio"
          value={el}
          checked={selectedOption === el}
          onChange={onChangeHandler}
          name="categories"
        />
        {el}
      </label>
    );
  });
  return <>{categoriesRadio}</>;
}

export default RadioButtonGroupe;
