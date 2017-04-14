    $(function() {
        $('input[name=topik1]').on('click init-post-format', function() {
            $('#input-topik1').toggle($('#inputTopik1').prop('checked'));
        }).trigger('init-post-format');
    });

    $(function() {
        $('input[name=topik1]').on('click init-post-format', function() {
            $('#pilih-topik1').toggle($('#pilihTopik1').prop('checked'));
        }).trigger('init-post-format');
    });

    $(function() {
        $('input[name=topik2]').on('click init-post-format', function() {
            $('#input-topik2').toggle($('#inputTopik2').prop('checked'));
        }).trigger('init-post-format');
    });

    $(function() {
        $('input[name=topik2]').on('click init-post-format', function() {
            $('#pilih-topik2').toggle($('#pilihTopik2').prop('checked'));
        }).trigger('init-post-format');
    });

    $(function() {
        $('input[name=topik3]').on('click init-post-format', function() {
            $('#input-topik3').toggle($('#inputTopik3').prop('checked'));
        }).trigger('init-post-format');
    });

    $(function() {
        $('input[name=topik3]').on('click init-post-format', function() {
            $('#pilih-topik3').toggle($('#pilihTopik3').prop('checked'));
        }).trigger('init-post-format');
    });

    $('#choose-topik1').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-topik1').css({'width': '50%'}).toggle();
        $('#options-kategori1').hide();
        $('#options-dosen1').hide();
    });

    $('#options-topik1').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-topik1').text(val);
        $(this).hide();
    });

    $('#options-topik1').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });

    $('#choose-kategori1').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-kategori1').css({'width': '50%'}).toggle();
        $('#options-topik1').hide();
        $('#options-dosen1').hide();
    });

    $('#options-kategori1').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-kategori1').text(val);
        $(this).hide();
    });

    $('#options-kategori1').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });

    $('#choose-dosen1').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-dosen1').css({'width': '50%'}).toggle();
        $('#options-topik1').hide();
        $('#options-kategori1').hide();
    });

    $('#options-dosen1').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-dosen1').text(val);
        $(this).hide();
    });

    $('#options-dosen1').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });

    $('#choose-topik2').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-topik2').css({'width': '50%'}).toggle();
        $('#options-kategori2').hide();
        $('#options-dosen2').hide();
    });

    $('#options-topik2').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-topik2').text(val);
        $(this).hide();
    });

    $('#options-topik2').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });

    $('#choose-kategori2').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-kategori2').css({'width': '50%'}).toggle();
        $('#options-topik2').hide();
        $('#options-dosen2').hide();
    });

    $('#options-kategori2').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-kategori2').text(val);
        $(this).hide();
    });

    $('#options-kategori2').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });

    $('#choose-dosen2').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-dosen2').css({'width': '50%'}).toggle();
        $('#options-topik2').hide();
        $('#options-kategori2').hide();
    });

    $('#options-dosen2').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-dosen2').text(val);
        $(this).hide();
    });

    $('#options-dosen2').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });

    $('#choose-topik3').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-topik3').css({'width': '50%'}).toggle();
        $('#options-kategori3').hide();
        $('#options-dosen3').hide();
    });

    $('#options-topik3').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-topik3').text(val);
        $(this).hide();
    });

    $('#options-topik3').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });

    $('#choose-kategori3').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-kategori3').css({'width': '50%'}).toggle();
        $('#options-topik3').hide();
        $('#options-dosen3').hide();
    });

    $('#options-kategori3').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-kategori3').text(val);
        $(this).hide();
    });

    $('#options-kategori3').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });

    $('#choose-dosen3').click(function (e) {
        e.stopPropagation();
        $(this).siblings('#options-dosen3').css({'width': '50%'}).toggle();
        $('#options-topik3').hide();
        $('#options-kategori3').hide();
    });

    $('#options-dosen3').change(function (e) {
        e.stopPropagation();
        var val = this.value || 'Select options';
        $(this).siblings('#choose-dosen3').text(val);
        $(this).hide();
    });

    $('#options-dosen3').find('option').on({
        'mouseover': function () {
            $('.hover').removeClass('hover');
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        },
        'click' : function() {
            $('.current').removeClass('current');
            $(this).addClass('current');
        }

    });