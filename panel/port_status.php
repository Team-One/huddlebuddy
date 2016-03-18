<?

$statuses = array();
// Broker
$churl = fsockopen("solr.t1p1.com", 1883); 
if (!$churl){ 
  $statuses['broker'] = "offline";
} else { 
  $statuses['broker'] = "online";              
}

// Proxy
$churl = fsockopen("solr.t1p1.com", 3000, $errno, $errstr, 5); 
if (!$churl){ 
  $statuses['proxy'] = "offline";
} else { 
  $statuses['proxy'] = "online";             
} 
echo json_encode($statuses);
?>