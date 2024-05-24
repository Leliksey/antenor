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
    
    // Диаграмма состояние движения
    // const countObjectsxArray = ["", "", "", ""];
    // const countObjectsyArray = [13, 4, 9, 0];

    // const countObjectsLayout = {title:""};

    // const countObjectsData = [{labels:countObjectsxArray, values:countObjectsyArray, hole:.66, type:"pie"}];

    // Plotly.newPlot("countObjects", countObjectsData, countObjectsLayout);


    // Переключение графиков
    $(document).on("click", ".btn-grafic", function(e) {
        if($(e.target).hasClass("active")) {
            return
        } else {
            $(".btn-grafic").removeClass("active");
            $(this).addClass("active");
            $(".grafic img").toggleClass("hide");
        }
    });

    // Установка значений прогресс бар
    function setProgressBarValue(progressBar, value) {
        var max = progressBar.attr('aria-valuemax');
        var percentage = (value / max) * 100;
        progressBar.css('width', percentage + '%').attr('aria-valuenow', value);
    }

    $(document).ready(function() {
        var progressBars = $('.progress-bar');
        // Установка значений для каждого прогресс-бара
        setProgressBarValue($(progressBars[0]), 600);
        setProgressBarValue($(progressBars[1]), 300);
        setProgressBarValue($(progressBars[2]), 900);
    });


    $(".js-select2").select2({
        closeOnSelect : false,
        placeholder : "Все объекты",
        allowHtml: true,
        allowClear: true
    });

    $(document).on("click", "#burger", function() {
        $(".navbar-collapse").addClass("open")
    })
    $(document).on("click", "#burger-close", function() {
        $(".navbar-collapse").removeClass("open")
    })
});
