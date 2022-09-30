import showAlert from '../../../config/alerts/sweetalert.config';

export const useClearCanvas = ({ clearAction }: any) => {
  const onClickClearButtonHandler = () => {
    showAlert({
      title: 'Are you sure? 🤔',
      text: 'Are you sure you want to clear the board?, there is no going back',
      icon: 'warning',
      confirmButtonText: 'Clear',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        clearAction();
        showAlert({
          title: 'Board clear ✅',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        });
      }
    });
  };

  return { onClickClearButtonHandler };
};
