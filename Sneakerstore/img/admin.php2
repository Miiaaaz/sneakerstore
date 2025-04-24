<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Management</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

    <!-- DataTables CSS -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.4.1/css/buttons.dataTables.min.css">

    <!-- Custom Style -->
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #ffccf9, #dab6fc, #cce7ff);
        }

        h2 {
            text-align: center;
            color: #5a189a;
            margin-bottom: 30px;
        }

        .table-container {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            overflow-x: auto;
        }

        .back-btn {
            display: inline-block;
            margin-top: 20px;
            background-color: #ff77aa;
            color: white;
            padding: 10px 16px;
            text-decoration: none;
            border-radius: 12px;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

        .back-btn:hover {
            background-color: #e95e9a;
        }

        table.dataTable thead th {
            background-color: #b185db;
            color: white;
        }

        @media (max-width: 768px) {
            h2 {
                font-size: 22px;
            }
            table, th, td {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>

    <h2>Payments</h2>

    <div class="table-container">
        <table id="paymentsTable" class="display nowrap">
            <thead>
                <tr>
                    <th>Serial No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Card Number</th>
                    <th>Expiry Month</th>
                    <th>Expiry Year</th>
                    <th>CVV</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $conn = new mysqli("localhost", "root", "", "sneakerstore");
                if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

                $sql = "SELECT name, phone, address, card_number, expiry_month, expiry_year, cvv FROM payments";
                $result = $conn->query($sql);
                if (!$result) die("Query failed: " . $conn->error);

                $serial = 1;
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>{$serial}</td>
                            <td>{$row['name']}</td>
                            <td>{$row['phone']}</td>
                            <td>{$row['address']}</td>
                            <td>{$row['card_number']}</td>
                            <td>{$row['expiry_month']}</td>
                            <td>{$row['expiry_year']}</td>
                            <td>{$row['cvv']}</td>
                          </tr>";
                    $serial++;
                }
                $conn->close();
                ?>
            </tbody>
        </table>
    </div>

    <a href="index.html" class="back-btn">Back</a>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.4.1/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.4.1/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.4.1/js/buttons.print.min.js"></script>

    <script>
        $(document).ready(function () {
            $('#paymentsTable').DataTable({
                responsive: true,
                dom: 'Bfrtip',
                buttons: ['copy', 'csv', 'excel', 'print'],
                paging: true,
                searching: true,
                ordering: true
            });
        });
    </script>
</body>
</html>
