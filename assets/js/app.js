$(document).ready(function() {
    //Инициализация Датапикера
    $('#date-range-from, #date-range-to').datepicker({
        format: 'dd.mm.yyyy',
        startDate: '01.01.2020',
        endDate: '31.12.2025',
        todayHighlight: true,
        language: 'ru',
        autoclose: true,
    });

    //Переключение табов в фильтре
    $(document).on("click", ".dashboard-filter-tab", function() {
        $(".dashboard-filter-tab").removeClass("btn-primary");
        $(this).addClass("btn-primary");
    });

    // Диаграмма состояние соединения
    const MotionStatexArray = ["Стоят", "Стоят с зажиганием", "Движутся с зажиганием", "Движутся"];
    const MotionStateyArray = [13, 6, 9, 4];

    const MotionStatelayout = {title:""};

    const MotionStateData = [{labels:MotionStatexArray, values:MotionStateyArray, hole:.66, type:"pie"}];

    Plotly.newPlot("MotionState", MotionStateData, MotionStatelayout);

    // Диаграмма состояние движения
    const ConnectionStatexArray = ["Не подключены", "Подключены"];
    const ConnectionStateyArray = [13, 4];

    const ConnectionStateLayout = {title:""};

    const ConnectionStateData = [{labels:ConnectionStatexArray, values:ConnectionStateyArray, hole:.66, type:"pie"}];

    Plotly.newPlot("ConnectionState", ConnectionStateData, ConnectionStateLayout);
});
