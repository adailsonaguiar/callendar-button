import './App.css'

function App() {

  const addEventToCalendar = () => {
    const event = {
      title: 'Meu Evento',
      location: 'Local do Evento',
      startDate: '20240630T090000Z',
      endDate: '20240630T100000Z',
      description: 'Descrição do evento'
    };

    const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isiOS) {
      const iosUrl = `webcal://add-event?title=${event.title}&location=${event.location}&startDate=${event.startDate}&endDate=${event.endDate}&description=${event.description}`;
      window.location.href = iosUrl;
    } else if (isAndroid) {
      const androidUrl = `intent://details#Intent;action=android.intent.action.INSERT;S.title=${event.title};S.eventLocation=${event.location};S.beginTime=${event.startDate};S.endTime=${event.endDate};S.description=${event.description};end`;
      window.location.href = androidUrl;
    } else {
      alert('Seu dispositivo não é compatível.');
    }
  };

  return (
    <>
      <button onClick={addEventToCalendar}>
        Adicionar ao Calendário INTENT
      </button>
    </>
  )
}

export default App
