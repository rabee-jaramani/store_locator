import { CircularProgress, FormLabel, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import { stores_list } from '../data';
import no_resaults from './no_resaults.png';
export default function CardsBody() {
  // Constants
  const [searchPattern, setSearchPattern] = useState('');
  const [listWanted, setListWanted] = useState(stores_list);
  const [loading, setLoading] = useState(false);
  // const [temp_list, setTemp_list] = useState([]);
  // Functions
  const searchHandler = (e) => {
    setSearchPattern(e.target.value);
  };

  const updateList = () => {
    setLoading(true);
    const result = stores_list.filter(
      (x) =>
        x.city.toLocaleLowerCase().includes(searchPattern) ||
        x.location.toLocaleLowerCase().includes(searchPattern)
      // x.area_manager.toLocaleLowerCase().includes(searchPattern) ||
      // x.store_manager.toLocaleLowerCase().includes(searchPattern)
    );
    setListWanted(result);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // UseEffect
  useEffect(() => {
    updateList(searchPattern);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchPattern]);

  return (
    <div className="cards-container">
      <h1 style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
        Store Locator
      </h1>
      <div className="search-div">
        <TextField
          id="outlined-basic"
          label="Filter by city or mall"
          variant="outlined"
          fullWidth
          onChange={searchHandler}
        />
        <FormLabel color="primary">{listWanted.length} found</FormLabel>
      </div>
      {loading ? (
        <div className="loader">
          <CircularProgress size={70} />
        </div>
      ) : (
        <div className="cards-grid">
          {listWanted.length < 1 ? (
            <div className="no_resaults-div">
              <img alt="no resualt img" src={no_resaults} />
            </div>
          ) : (
            listWanted.map((x) => <Card card={x} key={x.id} />)
          )}
        </div>
      )}
    </div>
  );
}
