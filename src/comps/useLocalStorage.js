function useLocalStorage() {
  const getKey = listName => listName === 'readlist' ? 'bookreveal:readlist' : 'bookreveal:wishlist'

  const lsGetItem = (listName) => {
    return JSON.parse(
      localStorage.getItem( getKey(listName) )
    ) || []
  }
  
  const lsSetItem = (listName, items) => {
    localStorage.setItem(getKey(listName) , JSON.stringify(items))
  }

  return {lsGetItem, lsSetItem}
}

export default useLocalStorage;