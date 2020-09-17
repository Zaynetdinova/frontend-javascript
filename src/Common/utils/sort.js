export  function sortDataUp (data, sortName) {
  switch (sortName) {
    case 'ID':
      return data.sort((a, b) => {
        if (a._id > b._id) {
          return -1;
        } else if (a._id < b._id) {
          return 1;
        }
        return 0;
      });

  case 'firstName':
    return data.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return -1;
      } else if (a.firstName < b.firstName) {
        return 1;
      }
      return 0;
    });

  case 'lastName':
      return data.sort((a, b) => {
        if (a.lastName > b.lastName) {
          return -1;
        } else if (a.lastName < b.lastName) {
          return 1;
        }
        return 0;
      });

  default:
    return 0;
  }
}

export  function sortDataDown (data, sortName) {
  switch (sortName) {
    case 'ID':
      return data.sort((a, b) => {
        if (a._id > b._id) {
          return 1;
        } else if (a._id < b._id) {
          return -1;
        }
        return 0;
      });

  case 'firstName':
    return data.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return 1;
      } else if (a.firstName < b.firstName) {
        return -1;
      }
      return 0;
    });

  case 'lastName':
    return data.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return 1;
      } else if (a.lastName < b.lastName) {
        return -1;
      }
      return 0;
    });

    default:
      return 0;
  }
}
