$(function(){   
    let dateRangePicker = document.getElementById('FillterDateRangePicker');
    let pickerRange = new Lightpick({
        field: dateRangePicker,
        singleDate: false,
        lang: 'vi',
        onSelect: function(start, end){
            let str = '';
            str += start ? start.format('DD\/MM\/YYYY') + ' - ' : '';
            str += end ? end.format('DD\/MM\/YYYY') : '...';
            dateRangePicker.value = str;
        }
    });
    // Lấy phần tử select
    let yearPicker = document.getElementById('FillterYearPicker');
    if (yearPicker) {
        // Xóa các tùy chọn hiện tại (nếu có)
        yearPicker.innerHTML = '';

        // Xác định khoảng năm
        let currentYear = new Date().getFullYear();
        let startYear = currentYear - 10; // Năm bắt đầu
        let endYear = currentYear + 10;   // Năm kết thúc

        // Thêm tùy chọn "Tất cả"
        let allOption = document.createElement('option');
        allOption.value = ''; // Giá trị rỗng đại diện cho "Tất cả"
        allOption.text = 'Tất cả';
        yearPicker.appendChild(allOption);
        
        // Thêm các tùy chọn năm vào select
        for (let year = startYear; year <= endYear; year++) {
            let option = document.createElement('option');
            option.value = year;
            option.text = year;
            yearPicker.appendChild(option);
        }

        // Xử lý sự kiện khi chọn năm
        yearPicker.addEventListener('change', function() {
            console.log('Năm được chọn:', yearPicker.value);
        });
    }
});
