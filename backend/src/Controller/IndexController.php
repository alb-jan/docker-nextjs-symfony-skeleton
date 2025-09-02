<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class IndexController extends AbstractController
{
    #[Route('/test', name: 'app_index')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Hello World!'
        ]);
    }
}
